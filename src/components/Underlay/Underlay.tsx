import React, { forwardRef } from 'react';

import { clsx } from 'clsx';

import { colorClassBuilder } from '@/utils';

import {
    UnderlayProps,
    radiusOptions,
} from './constants';
import { Skeleton } from '../Skeleton';

export const Underlay = forwardRef<HTMLDivElement, UnderlayProps>((props, ref) => {
    const {
        cornerRadius = '4x',
        children = '',
        enableSkeleton = false,
        style = {},
        bgColor = 'secondary',
        skeletonColor = 'primary',
        borderStyle = '',
        topPadding = '2x',
        bottomPadding = '2x',
        leftPadding = '2x',
        rightPadding = '2x',
        className,
    } = props;

    const bgColorClass = colorClassBuilder({
        type: 'background',
        color: enableSkeleton ? skeletonColor : bgColor,
    });
    if (enableSkeleton) {
        return <Skeleton shape='Rectangle'
            style={{ borderRadius: radiusOptions[cornerRadius], ...style }}
            className={clsx(
                'w-full',
                bgColorClass,
                borderStyle,
                leftPadding && `pl-${leftPadding}`,
                rightPadding && `pr-${rightPadding}`,
                topPadding && `pt-${topPadding}`,
                bottomPadding && `pb-${bottomPadding}`,
            )}>
            <span className='invisible'>Скелетон</span>
        </Skeleton>;
    }

    return <div
        ref={ref}
        style={{ borderRadius: radiusOptions[cornerRadius], ...style }}
        className={clsx(
            'w-fit',
            leftPadding && `pl-${leftPadding}`,
            rightPadding && `pr-${rightPadding}`,
            topPadding && `pt-${topPadding}`,
            bottomPadding && `pb-${bottomPadding}`,
            bgColorClass,
            borderStyle,
            className,
        )}
    >
        {children}
    </div>;
});
