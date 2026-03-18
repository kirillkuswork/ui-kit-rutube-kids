import React, { ChangeEvent } from 'react';

import clsx from 'clsx';

import {
    GenericWrapper,
    IconView,
    TextLabel,
} from '@/components';
import { OnboardingCardProps } from '@/components/OnboardingCard/OnboardingCard.types';
import { Skeleton } from '@/components/Skeleton';
import { colorClassBuilder } from '@/utils';
import { useActiveBreakpoint } from '@/utils/hooks/useActiveBreakpoint';
import { useHover } from '@/utils/hooks/useHover';

export const OnboardingCard = React.forwardRef<HTMLDivElement, OnboardingCardProps>(
    (props: OnboardingCardProps, ref) => {
        const {
            name,
            src,
            value,
            title,
            subTitle,
            isSelected = false,
            isLoading,
            className,
            wrapperClassName,
            htmlInputProps,
            onChange: handleOnChange,
        } = props;
        const { windowSize: { sm, md, lg, xl } } = useActiveBreakpoint();
        const [isHovered, hoverProps] = useHover();
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            handleOnChange?.(event);
        };
        const [isSelectedColor, bgHoverColor, borderColor] = colorClassBuilder([
            { type: 'graphic', color: (isSelected && !isLoading) || isHovered ? 'brand' : 'primary', invertion: true },
            { type: 'background', color: 'brand' },
            { type: 'stroke', color: 'brand', prefix: 'after' },
        ]);

        const commonClasses = clsx(isSelectedColor, 'relative cursor-pointer flex items-center');
        const desktopClasses = 'lg:h-[402px] lg:w-[280px] lg:rounded-6x lg:p-6x';
        const tabletClasses = 'md:h-[383px] md:w-[202px] md:pt-6x md:px-4x md:pb-4x md:flex-col md:items-center';
        const mobileClasses = 'h-[180px] w-[358px] rounded-3x rounded-s-3x px-6x';
        const hoverClasses = clsx(bgHoverColor, borderColor, 'lg:hover:rounded-none lg:hover:after:border-2x lg:after:block lg:after:absolute lg:after:-inset-2 lg:after:border-solid lg:after:rounded-l-3x lg:after:rounded-r-3x');

        // Заменить в будущем на компонент Skeleton
        const onboardingCardSkeleton = () => <div className='flex md:flex-col h-max gap-6x items-center w-full'>
            <Skeleton className='w-[112px] h-[112px] lg:!w-[156px] lg:!h-[156px]' shape='Circle' />
            <div className='flex flex-col lg:w-full items-start md:items-center'>
                <Skeleton className='mb-5x !h-[26px] lg:!w-[180px] !w-[150px]'/>
                <Skeleton className='mb-3x !h-[20px] lg:!w-full !w-[170px]'/>
                <Skeleton className='!h-[20px] !w-[120px]'/>
            </div>
        </div>;

        return (
            <div ref={ref}
                className={clsx(wrapperClassName, 'w-max')}
                {...hoverProps}>
                <input
                    className="hidden"
                    type="checkbox"
                    id={name}
                    checked={isSelected}
                    onChange={handleChange}
                    name={name}
                    value={value}
                    {...htmlInputProps}
                />
                <label htmlFor={name}>
                    <div className={clsx(
                        className,
                        (isSelected || (isHovered && !isLoading)) && hoverClasses,
                        desktopClasses,
                        tabletClasses,
                        mobileClasses,
                        commonClasses,
                    )}>
                        {isLoading && onboardingCardSkeleton()}
                        {!isLoading && <GenericWrapper
                            layout={sm ? 'horizontal' : 'vertical'}
                            alignment='center'
                            gap='6x'
                            addonView={
                                <IconView showBgImage
                                    image={src}
                                    size={lg || xl ? '8XL' : '5XL'}
                                />
                            }
                        >
                            <div className='flex flex-col md:items-center items-left md:text-center text-left md:gap-3x gap-2x w-full'>
                                <TextLabel
                                    inverted={(isSelected || isHovered)}
                                    fontType='Headline'
                                    size={md ? 'M' : 'S'}
                                    color="primary"
                                >
                                    <div className='w-full md:w-[110px]'>{title}</div>
                                </TextLabel>
                                <TextLabel
                                    inverted={(isSelected || isHovered)}
                                    color={isSelected || isHovered ? 'primary' : 'secondary' }
                                    size='M'
                                    textType='Paragraph'
                                >
                                    {subTitle}
                                </TextLabel>
                            </div>
                        </GenericWrapper>}
                    </div>
                </label>
            </div>
        );
    },
);
