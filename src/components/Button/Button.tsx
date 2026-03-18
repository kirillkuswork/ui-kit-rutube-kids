import React, {
    forwardRef,
    useMemo,
} from 'react';

import clsx from 'clsx';

import { SVG } from '@/assets/icons';
import { Skeleton } from '@/components/Skeleton';
import { colorClassBuilder } from '@/utils';

import { ButtonProps } from './types';
import { Typography } from '../Typography';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const {
            onClick,
            onClickTagHandle,
            size = 'L',
            variant = 'Primary',
            isEnabled = true,
            isLoading = false,
            isInverted = false,
            fullWidth = false,
            showSkeleton = false,
            icon,
            label,
            iconPosition = 'Left',
            shape = 'Square',
            className,
            ...btnAttrs
        } = props;

        // Событие по нажатию на кнопку
        const handleClick = () => {
            onClick?.();
        };

        const isIconOrLoading = (icon && !label) || isLoading;
        const isRound = isIconOrLoading && shape === 'Round';
        const flexCenter = 'flex items-center justify-center';

        // TODO типография не соответсвует макету, так как нет еще новых токенов

        // Размеры кнопки
        const sizeStyles = {
            L: `h-12x gap-x-3x text-[16px] ${isIconOrLoading ? 'px-3x w-12x' : 'px-5x'}`,
            M: `h-10x gap-x-3x text-[16px] ${isIconOrLoading ? 'px-2x w-10x' : 'px-4x'}`,
            S: `h-8x gap-x-2x !text-[12px] ${isIconOrLoading ? 'px-2x w-8x' : 'px-3x'}`,
            XS: `h-6x gap-x-1x !text-[12px] ${isIconOrLoading ? 'px-1x w-6x' : 'px-2x'}`,
        };

        // Стили для прослойки ControlState.
        // Исключает возможность добавления hover и active
        // для состояния disabled и скелетона
        const controlStateStyles = clsx(
            sizeStyles[size],
            fullWidth ? 'w-full' : 'w-fit',
            isRound ? 'after:rounded-full' : 'after:rounded-lg',
            isEnabled && !showSkeleton ? 'control-state-shade' : 'control-state',
        );

        const [
            textPrimaryInvertedColor,
            textPrimaryColor,
            bgPrimaryColor,
            bgPrimaryInvertedColor,
            bgSecondaryColor,
            textDisabledColor,
            bgTransparent,
            borderTertiary,
            bgSecondaryDisabled,
        ] = colorClassBuilder([
            { type: 'text', color: 'primary', invertion: true },
            { type: 'text', color: 'primary' },
            { type: 'background', color: 'brand' },
            { type: 'background', color: 'primary', invertion: true },
            { type: 'background', color: 'secondary' },
            { type: 'text', color: 'tertiary', prefix: 'disabled' },
            { type: 'background', color: 'transparent' },
            { type: 'stroke', color: 'tertiary', prefix: 'before' },
            { type: 'background', color: 'secondary', prefix: 'disabled' },
        ]);

        // Стили для кнопки
        const classes = useMemo(() => {
            const disabledStyles = `${bgSecondaryDisabled} ${textDisabledColor}`;

            // Базовые стили которые есть во всех вариантах
            const baseCommonStyles = clsx(
                className,
                disabledStyles,
                textPrimaryColor,
                flexCenter,
                !isLoading && fullWidth ? 'w-full' : 'w-fit',
                isRound ? 'rounded-full before:rounded-full' : 'rounded-lg before:rounded-lg',
                'relative cursor-pointer overflow-hidden',
                'before:block before:absolute before:inset-0 before:border-solid',
            );

            const variantStyles = {
                Primary: clsx(
                    bgPrimaryColor,
                    isInverted && bgPrimaryInvertedColor,
                    textPrimaryInvertedColor,
                ),
                Secondary: bgSecondaryColor,
                Outline: `${borderTertiary} before:border-[1px]`,
                Link: `disabled:${bgTransparent}`,
            };

            return clsx(
                controlStateStyles,
                baseCommonStyles,
                sizeStyles[size],
                variantStyles[variant],
            );
        }, [
            fullWidth,
            className,
            variant,
            isLoading,
            isEnabled,
            showSkeleton,
            isInverted,
            controlStateStyles,
            sizeStyles,
            size,
        ]);

        // Размеры иконки
        const iconSize = {
            L: 'w-6x',
            M: 'w-6x',
            S: 'w-4x',
            XS: 'w-4x',
        };

        const textSize = {
            L: 'L',
            M: 'M',
            S: 'S',
            XS: 'S',
        } as const;

        // Отображение иконки
        const iconRender = <div className={clsx(
            iconSize[size],
            flexCenter,
        )}>
            {icon}
        </div>;
        // Отображение лоадера
        const loaderRender = <div className={clsx(iconSize[size], flexCenter, 'animate-spin')}><SVG.LoaderIcon /></div>;

        return (
            <button
                ref={ref}
                onClick={handleClick}
                type="button"
                className={classes}
                disabled={!isEnabled}
                {...btnAttrs}
            >
                {showSkeleton && <Skeleton className='absolute top-0 left-0 right-0 bottom-0 z-10' />}

                {!isLoading
                    && <>
                        {!!icon && iconPosition === 'Left' && iconRender}
                        {!!label && <Typography
                            textType='Paragraph'
                            weight='Semibold'
                            size={textSize[size]}
                        >
                            {label}
                        </Typography>}
                        {!!icon && iconPosition === 'Right' && iconRender}
                    </>
                }
                {isLoading && loaderRender}
            </button>
        );
    },
);
