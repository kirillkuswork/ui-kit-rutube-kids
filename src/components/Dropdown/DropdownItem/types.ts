import { ReactNode } from 'react';

import { DropdownItemOnClickType } from '@/components/Dropdown/types';

export type DropdownItemType = {
    title: string
    value: string
    subTitle?: string
    img?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    isItemLoading?: boolean
    showButton?: boolean
    showCheckbox?: boolean
    buttonLabel?: string
    isSelected?: boolean
    onClick?: (params: DropdownItemOnClickType) => void
};
