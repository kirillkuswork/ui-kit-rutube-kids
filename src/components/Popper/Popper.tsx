import React, {
    FC,
    useEffect,
    useState,
    useCallback,
    useMemo,
} from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
    ModifierArguments,
    Instance,
} from '@popperjs/core';
import { createPortal } from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { usePopper } from 'react-popper';

import { PopperProps } from './types';

export const PopperCtx = React.createContext<Instance | null>(null);

export const Popper: FC<PopperProps> = ({
    children,
    isOpen,
    placement = 'bottom-start',
    offsetX,
    offsetY = 8,
    content,
    autoWidth,
    style,
    overflowPadding = 0,
    onOutsideClick,
    onOutsideMove,
    onInit,
    strategy = 'absolute',
}) => {
    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
    const [popperInstance, setPopperInstance] = useState<Instance | null>(null);
    const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

    const childrenClone = useMemo(() => React.cloneElement(children, {
        ref: setReferenceElement,
    }), [children]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        const handleEvent = (event: Event, handler: () => void) => {
            const currentTarget = event.target as HTMLElement;
            if (!referenceElement?.contains(currentTarget)
                && !popperElement?.contains(currentTarget)) {
                handler();
            }
        };

        if (isOpen) {
            if (onOutsideClick) {
                const handleClick = (event: Event) => handleEvent(event, onOutsideClick);
                document.addEventListener('mousedown', handleClick);
                document.addEventListener('touchstart', handleClick);

                return () => {
                    document.removeEventListener('mousedown', handleClick);
                    document.removeEventListener('touchstart', handleClick);
                };
            }

            if (onOutsideMove) {
                let timeout: NodeJS.Timeout;
                const handleMove = (event: Event) => {
                    clearTimeout(timeout);
                    handleEvent(event, () => {
                        timeout = setTimeout(() => onOutsideMove?.(), 100);
                    });
                };

                document.addEventListener('mousemove', handleMove);

                return () => {
                    document.removeEventListener('mousemove', handleMove);
                };
            }
        }
    }, [isOpen, referenceElement, popperElement, onOutsideClick, onOutsideMove]);

    useEffect(() => {
        if (referenceElement) {
            const modalRoot = document.querySelectorAll('.RuiModal');
            const parentModalRoot = Array.from(modalRoot).find((modalNode) => (
                modalNode.contains(referenceElement)
            ));

            if (parentModalRoot) {
                setMountNode(parentModalRoot as HTMLElement);

                return;
            }

            setMountNode(document.getElementById('popover') || document.body);
        }
    }, [referenceElement]);

    useEffect(() => {
        onInit?.({
            referenceElement,
        });
    }, [referenceElement, onInit]);

    const setReferenceWidth = useCallback((data: ModifierArguments<object>) => {
        if (autoWidth && data.state.styles.popper) {
            // eslint-disable-next-line no-param-reassign
            data.state.styles.popper.width = `${data.state.rects.reference.width}px`;
        }
    }, [autoWidth]);

    const getInstance = useCallback((data: ModifierArguments<object>) => {
        setPopperInstance(data.instance);
    }, []);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement,
        strategy,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [offsetX, offsetY],
                },
            },
            {
                name: 'preventOverflow',
                options: {
                    padding: overflowPadding,
                },
            },
            {
                name: 'autoWidth',
                enabled: true,
                phase: 'beforeWrite',
                requires: ['computeStyles'],
                fn: setReferenceWidth,
            },
            {
                name: 'getInstance',
                enabled: true,
                phase: 'afterWrite',
                fn: getInstance,
            },
        ],
    });

    if (!mountNode) {
        return childrenClone;
    }

    return (
        <PopperCtx.Provider value={popperInstance}>
            {childrenClone}
            {isOpen ? createPortal(
                <div
                    ref={setPopperElement}
                    style={{ ...styles.popper, ...style }}
                    {...attributes.popper}
                >
                    {content}
                </div>,
                mountNode,
            ) : null}
        </PopperCtx.Provider>
    );
};
