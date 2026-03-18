import React, { ChangeEvent } from 'react';

import clsx from 'clsx';

import { SVG } from '@/assets/icons';
import { IconView } from '@/components';
import { FavoriteCardProps } from '@/components/FavoriteCard/FavoriteCard.types';
import { Skeleton } from '@/components/Skeleton';
import { colorClassBuilder } from '@/utils';

export const FavoriteCard = React.forwardRef<HTMLDivElement, FavoriteCardProps>(
    (props: FavoriteCardProps, ref) => {
        const {
            name,
            src,
            alt = '',
            value,
            isSelected = false,
            isLoading,
            className,
            wrapperClassName,
            htmlInputProps,
            onChange: handleOnChange,
        } = props;

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            handleOnChange?.(event);
        };

        const borderColor = colorClassBuilder({ type: 'stroke', color: 'brand', prefix: 'before', as: 'stroke' });

        const commonClasses = 'w-full h-full relative overflow-hidden rounded-s-3x rounded-e-3x lg:rounded-6x cursor-pointer';
        const borderClasses = `${borderColor} before:block before:absolute before:inset-0 before:border-solid before:rounded-s-3x before:rounded-e-3x lg:before:rounded-6x`;
        const sizesClasses = 'min-w-[301px] min-h-[118px] max-w-[358px] max-h-[141px] md:max-w-[301px] md:max-h-[118px] lg:max-w-[388px] lg:max-h-[152px]';
        const checkedClasses = isSelected && !isLoading && 'before:border-2x';
        const hoverClasses = 'hover:before:border-2x';

        return (
            <div ref={ref} className={clsx(wrapperClassName, 'w-max')}>
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
                        sizesClasses,
                        borderClasses,
                        commonClasses,
                        checkedClasses,
                        hoverClasses,
                    )}>
                        {isLoading && <Skeleton className='absolute top-0 bottom-0 left-0 right-0 z-10' />}

                        <img className="object-cover"
                            src={src}
                            alt={alt} />

                        {isSelected && (
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <IconView
                                    centerIcon={{
                                        icon: <SVG.CheckBoxArrowIcon width={50}/>,
                                        iconColor: 'secondary',
                                    }}
                                    showCenterIcon
                                    size='3XL'
                                    showBgColor
                                    bgColor='brand'
                                    shapeType='Circle' />
                            </div>
                        )}
                    </div>
                </label>
            </div>
        );
    },
);
