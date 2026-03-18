import { ReactNode } from 'react';

import { Spacing } from '@/types';

type AddonSideType = 'start' | 'end';
type AlignmentType = 'top' | 'center' | 'bottom';
type LayoutType = 'horizontal' | 'vertical';

export interface GenericWrapperProps {
    addonView: ReactNode;
    addonSide?: AddonSideType;
    alignment?: AlignmentType;
    layout?: LayoutType;
    yPaddings?: Spacing;
    xPaddings?: Spacing;
    gap?: Spacing;
    mainContentClassName?: string;
    wrapperClassName?: string;
    children: ReactNode;
}
