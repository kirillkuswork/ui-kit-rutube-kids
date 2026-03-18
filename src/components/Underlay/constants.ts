import {
    HTMLAttributes,
    ReactNode,
} from 'react';

import {
    Color,
    Spacing,
} from '@/types';

type CornerRadiusKeys = Extract<Spacing, '4x' | '3x' | '2x' | '1x'>;
type CornerRadiusValues = 16 | 12 | 8 | 4;

export const radiusOptions: Record<CornerRadiusKeys, CornerRadiusValues> = {
    '4x': 16,
    '3x': 12,
    '2x': 8,
    '1x': 4,
};

export type UnderlayProps = {
    className?: string
    cornerRadius?: CornerRadiusKeys | undefined
    children: ReactNode
    enableSkeleton?: boolean | undefined
    style?: HTMLAttributes<HTMLDivElement>['style']
    bgColor?: Color
    skeletonColor?: Color
    borderStyle?: string
    topPadding?: Spacing | null
    bottomPadding?: Spacing | null
    leftPadding?: Spacing | null
    rightPadding?: Spacing | null
};
