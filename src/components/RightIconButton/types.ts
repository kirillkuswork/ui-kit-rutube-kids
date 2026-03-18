import { Spacing } from '@/types';

import { IconButtonProps } from '../IconButton/types';

export interface RightIconButtonProps extends IconButtonProps {
    className?: string;
    onClick?: () => void;
    outerAlignment?: 'top' | 'center' | 'bottom';
    innerAlignment?: 'top' | 'center' | 'bottom';
    outerYPaddings?: Spacing;
    outerXPaddings?: Spacing;
    innerYPaddings?: Spacing;
    innerXPaddings?: Spacing;
    title?: string;
    subtitle?: string;
    extraSubtitle?: string;
    value?: string;
    subvalue?: string;
    extraSubvalue?: string;
    rightButtonProps: IconButtonProps;
    leftButtonProps: IconButtonProps;
}
