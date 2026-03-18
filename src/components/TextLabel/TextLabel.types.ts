import { ReactNode } from 'react';

import { Spacing } from '@/types';

import { TypographyProps } from '../Typography/Typography.types';

export type TextLabelProps = TypographyProps & {
    state?: 'default' | 'skeleton';
    children: string | ReactNode;
    topPadding?: Spacing | null
    bottomPadding?: Spacing | null
    leftPadding?: Spacing | null
    rightPadding?: Spacing | null
};
