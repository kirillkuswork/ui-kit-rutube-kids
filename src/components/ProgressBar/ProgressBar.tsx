import React, { forwardRef } from 'react';

import clsx from 'clsx';

import { Skeleton } from '@/components/Skeleton';
import { colorClassBuilder } from '@/utils';

import { ProgressBarProps } from './types';

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
    (props, ref) => {
        const {
            value,
            showBackground = true,
            showSkeleton,
            color = 'secondary',
            size = 'M',
            className,
            ...restProps
        } = props;

        const progressBarSize = {
            L: 'h-[8px]',
            M: 'h-[6px]',
            S: 'h-[4px]',
        };

        const [progressBgColor, progressColor] = colorClassBuilder([
            {
                type: 'background',
                color: 'primary',
            },
            {
                type: 'graphic',
                color,
            },
        ]);

        const classes = {
            ProgressBarBG: clsx(
                progressBgColor,
                progressBarSize[size],
                'absolute w-[327px] justify-start items-center inline-flex rounded-sm',
            ),
            ProgressIndicator: clsx(
                progressColor,
                progressBarSize[size],
                'h-[4px] relative rounded-sm ease-in-out duration-300',
            ),
        };

        return (
            <div
                ref={ref}
                {...restProps}
                className={clsx(
                    showBackground
                        ? classes.ProgressBarBG
                        : 'absolute w-[327px] justify-start items-center inline-flex rounded-sm',
                )}>
                {showSkeleton && <Skeleton />}
                {!showSkeleton && <div
                    className={clsx(classes.ProgressIndicator)}
                    style={{ width: `${value}%` }}
                />}
            </div>
        );
    },
);
