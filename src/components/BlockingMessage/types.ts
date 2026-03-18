import { ButtonHTMLAttributes } from 'react';

import { IconViewProps } from '../IconView/types';

export interface BlockingMessageProps extends Pick<IconViewProps, 'size'>, ButtonHTMLAttributes<HTMLButtonElement> {
    size: '11XL' | '10XL' | '9XL' | '8XL'
    title: string;
    subTitle: string;
    orientation: 'Horizontal' | 'Vertical';
    buttonLabel?: string;
    bgImage?: string;
    onClick?: () => void;
    isSkeleton?: boolean;
    className?: string;
}
