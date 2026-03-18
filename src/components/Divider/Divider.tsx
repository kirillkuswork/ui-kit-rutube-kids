import React, { FC } from 'react';

import { clsx } from 'clsx';

import { colorClassBuilder } from '@/utils';

export type DividerProps = {
    layout?: 'vertical' | 'horizontal'
    className?: string
};

export const Divider: FC<DividerProps> = ({ layout = 'horizontal', className = '' }) => {
    const bgColor = colorClassBuilder({
        type: 'stroke',
        color: 'quinary',
        as: 'background',
    });

    return (
        <div
            className={clsx(
                className,
                bgColor,
                'block',
                {
                    'w-full h-[1px]': layout === 'horizontal',
                    'w-[1px] h-[100%]': layout === 'vertical',
                },
            )}
        />
    );
};
