import { ButtonHTMLAttributes } from 'react';

import {
    IconViewProps,
    ShapeType,
} from '../IconView/types';

export interface IconButtonProps extends Pick<
IconViewProps, 'size' | 'className' | 'shapeType' | 'showBgColor' | 'showCenterIcon' | 'bgColor' | 'centerIcon'>, ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'XXL' | 'XL' | 'L' | 'M';
    onClick?: () => void;
    shapeType?: Extract<ShapeType, 'SuperEllipse' | 'Circle'>;
    isEnabled?: boolean;
    isSelected?: boolean;
    showSkeleton?: boolean;
}
