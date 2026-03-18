import {
    ButtonHTMLAttributes,
    ReactElement,
    ReactNode,
} from 'react';

import { TextColor } from '@/types';

export type ButtonSize = 'L' | 'M' | 'S' | 'XS';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: 'Primary' | 'Secondary' | 'Outline' | 'Link';
    iconPosition?: 'Left' | 'Right'
    shape?: 'Square' | 'Round'
    isEnabled?: boolean;
    isLoading?: boolean;
    isInverted?: boolean;
    className?: string;
    icon?: ReactElement;
    fullWidth?: boolean;
    label?: string;
    onClick?: () => void;
    onClickTagHandle?: () => void;
    showSkeleton?: boolean;
    iconColor?: TextColor;
}

export type ButtonStackProps = Pick<ButtonProps, 'size'> & {
    type?: '2Buttons' | 'Button'
    isStretched?: boolean
    gap: '2x' | '3x'
    className?: string
    firstButton?: ReactNode
    secondButton?: ReactNode
};
