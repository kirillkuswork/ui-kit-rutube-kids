import React, {
    createContext,
    forwardRef,
    HTMLAttributes,
    useContext,
    useMemo,
} from 'react';

import clsx from 'clsx';

import { SVG } from '@/assets/icons';
import {
    IconView,
    Typography,
} from '@/components';
import { Skeleton } from '@/components/Skeleton';
import { colorClassBuilder } from '@/utils';

import {
    FieldContainerProps,
    FieldHintProps,
    FieldInnerLabelProps,
    FieldWrapperProps,
    IFieldCtx,
} from './Field.types';

const FieldCtx = createContext<IFieldCtx>({ size: 'L' });

export class Field {
    static Container = (props: FieldContainerProps) => {
        const {
            id,
            size,
            disabled,
            largeField,
            ...htmlDivProps
        } = props;

        const ctxValue: IFieldCtx = useMemo(() => ({
            size,
            id,
            disabled,
            largeField,
        }), [size, id, disabled, largeField]);

        return (
            <FieldCtx.Provider value={ctxValue}>
                <div {...htmlDivProps} />
            </FieldCtx.Provider>
        );
    };

    static Wrapper = forwardRef<HTMLDivElement, FieldWrapperProps>((props, ref) => {
        const {
            children,
            className,
            focused,
            error,
            variant,
            isIconView,
            isSkeleton,
            ...htmlDivProps
        } = props;
        const { disabled, size } = useContext(FieldCtx);

        const wrapperSize = {
            L: 'h-[80px] px-4x',
            M: `h-[64px] pr-2x ${isIconView ? 'pl-2x' : 'pl-4x'}`,
            S: `h-[56px] pr-2x ${isIconView ? 'pl-2x' : 'pl-4x'}`,
            XS: `h-[40px] pr-2x ${isIconView ? 'pl-1x' : 'pl-4x'}`,
        };

        const [
            bgIslandColor,
            bgBaseColor,
            borderTransparentColor,
            bgTransparentColor,
            borderDisabledColor,
            borderErrorColor,
        ] = colorClassBuilder([
            { type: 'background', color: focused ? 'secondary' : 'primary' },
            { type: 'background', color: focused ? 'tertiary' : 'secondary' },
            { type: 'stroke', color: 'transparent', prefix: 'before' },
            { type: 'background', color: 'transparent' },
            { type: 'stroke', color: 'disabled', prefix: 'before' },
            { type: 'stroke', color: 'negative', prefix: 'before' },
        ]);

        const variantStyles = {
            Island: bgIslandColor,
            Base: bgBaseColor,
        };

        return (
            <div
                className={clsx(
                    variantStyles[variant],
                    className,
                    !disabled && 'control-state-shade after:rounded-r-3x after:rounded-l-3x',
                    wrapperSize[size],
                    disabled && `${bgTransparentColor} ${borderDisabledColor}`,
                    !error && !disabled && borderTransparentColor,
                    error && borderErrorColor,
                    'flex justify-between items-center box-border',
                    'duration-200 transition-colors',
                    'relative z-1 rounded-l-3x rounded-r-3x',
                    'before:block before:absolute before:inset-0 before:border-solid before:border-[1px]',
                    'before:rounded-r-3x before:rounded-l-3x',
                    'py-2x gap-x-1x',
                )}
                ref={ref}
                {...htmlDivProps}
            >
                {children}
            </div>
        );
    });

    static InnerLabel = (props: FieldInnerLabelProps) => {
        const {
            label,
            className,
            children,
            isActive,
            isEnabled,
            ...htmlLabelProps
        } = props;
        const { size, id } = useContext(FieldCtx);

        if (!label) {
            return <div className='w-full'>{children}</div>;
        }

        return (
            <label
                id={id}
                className={clsx((size === 'L' || size === 'M') ? 'gap-y-1x flex-col' : 'flex-row', 'flex w-full cursor-[inherit]')}
                {...htmlLabelProps}
            >
                <Typography
                    textType='Paragraph'
                    weight='Regular'
                    size={isActive ? 'S' : 'M'}
                    color={isEnabled ? 'secondary' : 'disabled'}
                    className={clsx(
                        className,
                        'top-[3px] absolute',
                        (size === 'L' || size === 'M') && !isActive && '!top-[14px]',
                        'origin-left inline-block duration-200 self-start !relative !z-0',
                    )}
                >
                    {label}
                </Typography>
                {children}
            </label>
        );
    };

    static Hints = (props: FieldHintProps) => {
        const {
            leftHint,
            rightHint,
            className,
            error,
            onPointerUp,
            ...htmlDivProps
        } = props;
        const { disabled } = useContext(FieldCtx);

        const secondaryTextColor = colorClassBuilder({ type: 'text', color: 'secondary' });

        return (
            <div
                className={clsx(
                    className,
                    secondaryTextColor,
                    'w-full grid grid-cols-2 mt-2x items-center duration-200 transition-colors',
                    disabled && 'pointer-events-none',
                )}
                onPointerUp={(e) => {
                    onPointerUp?.(e);
                    e.stopPropagation();
                }}
                {...htmlDivProps}
            >
                <div>{leftHint && <span className='flex items-center gap-x-1x w-full'>{leftHint}
                    <IconView size='S'
                        showBgColor
                        bgColor='transparent'
                        centerIcon={{ icon: <SVG.RoundIcon />, iconColor: 'primary' }}
                        showCenterIcon />
                </span>
                }
                </div>
                {rightHint && <span className='text-right'>{rightHint}</span>}
            </div>
        );
    };

    static InputSkeleton = (props: HTMLAttributes<HTMLDivElement>) => {
        const { className } = props;
        const { size } = useContext(FieldCtx);

        return (
            <Skeleton className={clsx(
                className,
                size === 'L' && '!h-[80px]',
                size === 'M' && '!h-[64px]',
                size === 'S' && '!h-[56px]',
                size === 'XS' && '!h-[40px]',
            )} />
        );
    };
}
