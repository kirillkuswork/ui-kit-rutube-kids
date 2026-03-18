import React, { FC } from 'react';

import clsx from 'clsx';

import { DropdownWrapperProps } from '@/components/Dropdown/DropdownWrapper/types';
import { colorClassBuilder } from '@/utils';

export const DropdownWrapper:FC<DropdownWrapperProps> = ({ isLoading, bgColor = 'quaternary', className, children }) => {
    const wrapperBgColor = colorClassBuilder({
        type: 'background',
        color: bgColor,
    });

    return <div className={clsx(
        className,
        wrapperBgColor,
        'w-full py-1x shadow-tooltip rounded-[12px] overflow-hidden',
        isLoading && '!p-3x gap-[16px] flex flex-col',
    )}>{children}</div>;
};
