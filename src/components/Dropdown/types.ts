import {
    ReactNode,
    MouseEvent,
} from 'react';

import { ButtonProps } from '@/components/Button/types';
import { Color } from '@/types';

import { DropdownItemType } from './DropdownItem/types';

export type DropdownButtonType = Pick<ButtonProps, 'label' | 'onClick' | 'onChange'>;
export type DropdownItemOnClickType = {
    option: DropdownItemType;
    event: MouseEvent<HTMLDivElement>
};

export type DropdownProps = {
    children?: ReactNode
    bgColor?: Color;
    isOpen?: boolean
    className?: string
    options?: DropdownItemType[]
    onClose?: () => void
    isLoading?: boolean
    onClick?: (params: DropdownItemOnClickType) => void
};
