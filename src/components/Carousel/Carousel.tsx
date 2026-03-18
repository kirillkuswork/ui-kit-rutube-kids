import React, {
    useState,
    useEffect,
    ReactNode,
    useMemo,
} from 'react';

import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import {
    animated,
    useSpring,
} from 'react-spring';

import { SVG } from '@/assets/icons';
import {
    IconButton,
    IconView,
    TextLabel,
} from '@/components';
import { CarouselProps } from '@/components/Carousel/types';
import { Dummy } from '@/components/Dummy';
import { colorClassBuilder } from '@/utils';
import { useBreakpoints } from '@/utils/hooks/useBreakpoints';
import { useIsMobile } from '@/utils/hooks/useIsMobile';

import { BlockingMessage } from '../BlockingMessage';

export const Carousel: React.FC<CarouselProps> = (props) => {
    const {
        items,
        slots,
        showDummy = false,
        title = 'Title',
        titleGroupIcon,
        onClick: handleOnClick,
        showBlockingMessage,
    } = props;
    const isMobile = useIsMobile();
    const { breakpoints: { md, lg, xl } } = useBreakpoints();
    const [current, setCurrent] = useState(0);
    const [visibleSlots, setVisibleSlots] = useState(slots.sm);

    const itemWidth = useMemo(() => {
        if (isMobile) {
            if (visibleSlots !== 3) {
                return 77;
            }

            return 42;
        }

        return 100 / visibleSlots;
    }, [isMobile, visibleSlots]);

    const springStyle = useSpring({
        transform: `translate3d(-${current * itemWidth}%, 0, 0)`,
        config: {
            tension: 250,
            friction: 30,
        },
    });

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;

            if (width >= xl.value) {
                setVisibleSlots(slots.xl);
            } else if (width >= lg.value) {
                setVisibleSlots(slots.lg);
            } else if (width >= md.value) {
                setVisibleSlots(slots.md);
            } else {
                setVisibleSlots(slots.sm);
            }
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);

        return () => {
            window.removeEventListener('resize', updateVisibleCount);
        };
    }, [slots]);

    const handleNext = () => {
        setCurrent((prev) => Math.min(prev + 1, items.length - visibleSlots));
    };

    const handlePrev = () => {
        setCurrent((prev) => Math.max(prev - 1, 0));
    };

    const [{ x }, set] = useSpring(() => ({ x: 0 }));

    const bind = useDrag(({ movement: [mx], direction: [xDir], down }) => {
        const offset = -current * itemWidth;
        set({ x: down ? mx + offset : offset, immediate: down });

        if (!down) {
            const nextCurrent = current + (xDir > 0 ? -1 : 1);

            if (nextCurrent >= 0 && nextCurrent <= (items.length - visibleSlots) + 1) {
                setCurrent(nextCurrent);
            }
        }
    });

    useEffect(() => {
        set({ x: -current * itemWidth });
    }, [current, set, itemWidth]);

    const mobileDrag = isMobile && bind();
    const isPrevButtonDisabled = current === 0;
    const isNextButtonDisabled = current === (items.length - visibleSlots);
    const bgColor = colorClassBuilder({
        type: 'background',
        color: 'quaternary',
    });

    return (
        <div className={clsx(bgColor, 'relative rounded-[24px] px-4x lg:px-6x')}>
            <div className='flex justify-between items-center py-4x'>
                <div className='flex items-center gap-x-3x'>
                    <IconView
                        size='L'
                        bgColor='transparent'
                        image={titleGroupIcon}
                        showBgImage />
                    <TextLabel size='M'>{title}</TextLabel>
                    <IconButton
                        onClick={handleOnClick}
                        className='rotate-180'
                        showCenterIcon
                        centerIcon={{
                            icon: <SVG.ArrowIcon className='w-4x' />,
                            iconColor: 'transparent',
                        }}
                        size='L'
                        bgColor='transparent' />
                </div>
                {!isMobile && <div className='flex gap-x-1x'>
                    <IconButton
                        isEnabled={!isPrevButtonDisabled}
                        showCenterIcon
                        centerIcon={{
                            icon: < SVG.ArrowIcon className='w-4x' />,
                            iconColor: 'transparent',
                        }}
                        bgColor='secondary'
                        onClick={handlePrev}
                        size='L' />
                    <IconButton isEnabled={!isNextButtonDisabled}
                        className='rotate-180'
                        showCenterIcon
                        centerIcon={{
                            icon: <SVG.ArrowIcon className='w-4x' />,
                            iconColor: 'transparent',
                        }}
                        bgColor='secondary'
                        onClick={handleNext}
                        size='L' />
                </div>}

            </div>
            <div className="overflow-hidden pb-4x relative">
                <animated.div {...mobileDrag}
                    className="flex ml-[-8px] mr-[-8px] lg:ml-[-12px] lg:mr-[-12px]"
                    style={isMobile ? { x } && springStyle : springStyle}>
                    {items.map((item: ReactNode, index: number) => (
                        <div key={index}
                            className={'flex-none px-2x lg:pl-[12px] lg:pr-[12px] h-full'}
                            style={{ flex: `0 0 ${itemWidth}%` }}
                        >
                            {showDummy ? <Dummy className='h-[135px]' /> : item}
                        </div>
                    ))}
                </animated.div>

                {showBlockingMessage?.show && (
                    <BlockingMessage
                        size='8XL'
                        title={showBlockingMessage.title || 'Title'}
                        subTitle={showBlockingMessage.subTitle || 'Subtitle'}
                        orientation="Vertical"
                        className="bg-[white] absolute w-full h-full top-0 left-0 flex items-center"
                    />
                )}
            </div>
        </div>
    );
};
