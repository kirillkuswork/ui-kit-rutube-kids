import React, {
    FC,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RemoveScroll } from 'react-remove-scroll';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
    useTransition,
    useSpringRef,
    useChain,
    animated,
    config,
} from 'react-spring';

import { colorClassBuilder } from '@/utils';
import { useResize } from '@/utils/hooks/useResize';

import { ModalProps } from '../types';

const THRESHOLD = 90;

export const MobileModal: FC<ModalProps & {
    mobileFullscreen?: boolean
} > = ({
    open: isOpen,
    children,
    ariaLabelledby,
    backdropProps,
    top,
    onClose: handleOnClose,
    onClosed,
    className = '',
    anchor,
    mobileFullscreen,
    ...htmlDivProps
}) => {
    const { rect, anchorRef } = useResize();
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [hasScroll, setHasScroll] = useState(false);
    const [scrolledTop, setScrolledTop] = useState(true);
    const [scrolledBottom, setScrolledBottom] = useState(false);
    const scrollTopRef = useRef(0);

    const { fromTranslateY, leaveTranslateY } = {
        fromTranslateY: !mobileFullscreen ? 200 : 0,
        leaveTranslateY: rect && rect?.height,
    };

    const api = useSpringRef();
    const transitions = useTransition(isOpen, {
        ref: api,
        from: { overlayOpacity: 0, modalOpacity: 0, y: fromTranslateY },
        enter: { overlayOpacity: 1, modalOpacity: !mobileFullscreen && 1, y: 0 },
        // eslint-disable-next-line max-len
        leave: { overlayOpacity: 0, modalOpacity: 0, y: leaveTranslateY, onRest: !isOpen ? onClosed : undefined },
        config: isOpen ? config.default : { duration: 150 },
    });
    useChain([api]);

    useEffect(() => {
        if (wrapperRef.current && rect) {
            setHasScroll(wrapperRef.current.scrollHeight > rect.height);
        }
    }, [rect?.height]);

    const close = useCallback(() => {
        handleOnClose?.();
    }, [handleOnClose]);

    const open = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    const handleScroll = useCallback(() => {
        if (wrapperRef.current && hasScroll) {
            const { offsetHeight, scrollTop, scrollHeight } = wrapperRef.current;
            scrollTopRef.current = scrollTop;
            setScrolledBottom(offsetHeight + scrollTop >= scrollHeight);
            setScrolledTop(scrollTop <= 0);
        }
    }, [hasScroll]);

    const bind = useDrag(
        ({
            movement: [, my],
            cancel,
            last,
            swipe: [, sy],
            distance: [, dy],
        }) => {
            const swipeUp = sy === -1;
            const swipeDown = sy === 1;

            if (hasScroll && scrollTopRef.current < 0 && my > 0 && dy > 8) {
                close();
                cancel();

                return;
            }

            if (hasScroll && ((scrolledTop && my <= 0) || (scrolledBottom && my >= 0))) {
                return;
            }

            // Закрытие при свайпе
            if (swipeUp || swipeDown) {
                close();

                return;
            }

            // Возвращещие на исходную открытую позицию при пперемещении вверх выше THRESHOLD
            if ((my > THRESHOLD && top) || (my < -THRESHOLD && !top)) {
                cancel();
                open();

                return;
            }

            if (last) {
                if (my > THRESHOLD) {
                    // Закрытие при перемещении ниже THRESHOLD
                    close();
                } else if (my < -THRESHOLD) {
                    close();
                } else {
                    // Возвращещие на исходную открытую позицию при перемещении в пределах THRESHOLD
                    open();
                }

                return;
            }

            api.start({ y: my, immediate: true });
        },
        {
            filterTaps: true,
            enabled: !hasScroll || (scrolledTop || scrolledBottom),
            swipe: {
                distance: 0.5,
                velocity: 1,
            },
        },
    );

    const isDrag = !mobileFullscreen && bind();

    const mobileOverlayColor = colorClassBuilder({ type: 'background', color: 'overlay' });

    const modal = transitions(({ overlayOpacity, modalOpacity, y }, opened) => opened && (
        <>
            <RemoveScroll allowPinchZoom>
                <animated.div
                    className={clsx(backdropProps?.transparent && !mobileFullscreen && mobileOverlayColor, 'fixed top-0 left-0 w-full h-full z-overlay')}
                    style={{ opacity: overlayOpacity }}
                    onPointerDownCapture={(e) => e.stopPropagation()}
                    onClick={(e) => {
                        e.stopPropagation();
                        close();
                    }}
                    {...backdropProps}
                />

                <animated.div
                    ref={anchorRef}
                    style={{ opacity: modalOpacity, translateY: y }}
                    className='fixed outline-none bottom-0 left-0 w-full z-modal-overlay'
                    aria-modal
                    aria-labelledby={ariaLabelledby}
                    tabIndex={-1}
                    role="dialog"
                    {...isDrag}
                    {...htmlDivProps}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={clsx(className, 'relative')}
                    >
                        <div onScroll={handleScroll} ref={wrapperRef}>
                            {children}
                        </div>
                    </div>
                </animated.div>
            </RemoveScroll>
        </>

    ));

    return createPortal(
        modal,
        (anchor || document.body),
    );
};
