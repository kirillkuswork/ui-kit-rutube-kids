import React, { FC } from 'react';

import clsx from 'clsx';

import { colorClassBuilder } from '@/utils';

import { SkeletonProps } from './types';

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        shape = 'Rectangle',
        className,
        children,
        ...restProps
    } = props;

    const bgColorClass = colorClassBuilder({
        type: 'background',
        color: 'primary',
    });

    return (
        <div
            className={clsx(
                bgColorClass,
                'animate-skeleton',
                shape === 'Rectangle' && 'w-full h-full rounded-2x',
                shape === 'Circle' && 'h-full aspect-square rounded-full',
                className,
            )}
            {...restProps}
        >
            {children}
        </div>
    );
};
