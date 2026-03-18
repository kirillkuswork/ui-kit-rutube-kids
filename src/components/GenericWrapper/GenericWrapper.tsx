import React, { useMemo } from 'react';

import clsx from 'clsx';

import { GenericWrapperProps } from './types';

export const GenericWrapper: React.FC<GenericWrapperProps> = ({
    addonView,
    addonSide = 'start',
    alignment = 'top',
    layout = 'horizontal',
    gap = '3x',
    yPaddings,
    xPaddings,
    mainContentClassName,
    wrapperClassName,
    children,
}) => {
    // Определяет выравнивание AddonView относительно MainContentView по оси X
    const alignmentX = {
        top: 'justify-start',
        center: 'justify-center',
        bottom: 'justify-end',
    };

    // Определяет выравнивание AddonView относительно MainContentView по оси Y
    const alignmentY = {
        top: 'items-start',
        center: 'items-center',
        bottom: 'items-end',
    };

    // Определяет положение ячеек относительно друг друга по осям X и Y
    const layoutDirection = layout !== 'horizontal' && 'flex-col';

    // Определяет положение AddonView
    const addonSideDirection = useMemo(() => {
        if (addonSide !== 'start' && layout === 'horizontal') {
            return 'flex-row-reverse';
        }
        if (addonSide === 'end' && layout === 'vertical') {
            return 'flex-col-reverse';
        }

        return '';
    }, [addonSide, layout]);

    return (
        <div
            className={clsx(
                wrapperClassName,
                addonSideDirection,
                layoutDirection,
                alignmentX[alignment],
                alignmentY[alignment],
                !!yPaddings && `py-${yPaddings}`,
                !!xPaddings && `px-${xPaddings}`,
                `gap-${gap}`,
                'flex',
            )}
        >
            <div className='w-max'>{addonView}</div>
            <div className={clsx(mainContentClassName, 'w-full')}>{children}</div>
        </div>
    );
};
