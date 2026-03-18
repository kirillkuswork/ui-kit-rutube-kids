import {
    ButtonHTMLAttributes,
    ReactNode,
} from 'react';

import { Spacing } from '@/types';

import { DropdownProps } from '../Dropdown/types';

export interface PickerButtonProps extends
    ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    isEnabled?: boolean;
    isSelected?: boolean;
    className?: string;
    addonView: ReactNode;
    addonSide?: 'start' | 'end';
    xPaddings?: Spacing;
    yPaddings?: Spacing;
    dropdown: DropdownProps;
    offsetX: number;
    offsetY: number;
}
