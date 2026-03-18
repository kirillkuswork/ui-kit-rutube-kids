import React, { FC } from 'react';

import clsx from 'clsx';

import { DropdownItem } from '@/components/Dropdown/DropdownItem';
import { DropdownSkeleton } from '@/components/Dropdown/DropdownSkeleton';
import { DropdownWrapper } from '@/components/Dropdown/DropdownWrapper';
import {
    DropdownItemOnClickType,
    DropdownProps,
} from '@/components/Dropdown/types';

export const Dropdown:FC<DropdownProps> = ({
    className,
    bgColor = 'quaternary',
    isLoading,
    options,
    children,
    onClick: onDropdownClick = () => {},
}) => {
    const handleDropdownClick = (params: DropdownItemOnClickType) => {
        onDropdownClick?.(params);
    };

    if (isLoading) {
        return <DropdownWrapper isLoading={isLoading}
            bgColor={bgColor}
            className={className}>
            <DropdownSkeleton />
        </DropdownWrapper>;
    }

    if (!isLoading) {
        return <DropdownWrapper bgColor={bgColor} className={className}>
            <div className={clsx(options && options.length > 5 && 'max-h-[280px]', 'overflow-y-scroll')}>
                {options ? options?.map((option, index) => (
                    <div onClick={(event) => handleDropdownClick?.({ option, event })} key={index}>
                        <DropdownItem {...option} />
                    </div>
                )) : children}
            </div>
        </DropdownWrapper>;
    }

    return null;
};
