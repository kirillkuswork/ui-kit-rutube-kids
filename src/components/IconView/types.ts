import { ReactNode } from 'react';

import {
    Color,
    TextColor,
} from '@/types';

export type ShapeType = 'SuperEllipse' | 'Circle' | 'CroppedTop' | 'CroppedBottom' | 'CroppedBoth';

// export type InnerViewType = 'Icon' | 'Initials';

export type IconViewSize = '14XL' | '13XL' | '12XL' | '11XL' | '10XL' | '9XL' | '8XL' | '7XL' | '6XL' | '5XL' | '4XL' | '3XL' | 'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS' | 'empty';

export type SideIcon = {
    showTopIcon?: boolean;
    topIcon?: ReactNode;
    topIconBgColor?: Color;
    topIconClassName?: string;
} & {
    showBottomIcon?: boolean;
    bottomIcon?: ReactNode;
    bottomIconBgColor?: Color;
    bottomIconClassName?: string;
};

export type IconViewProps = {
    // Размер формы
    size?: IconViewSize;
    state?: 'Default' | 'Active' | 'Disabled';
    centerIcon?: {
        icon: ReactNode,
        iconColor: TextColor,
        colorInvertion?: boolean,
    };
    shapeType?: ShapeType;
    // showInnerView?: boolean;
    // innerViewType?: InnerViewType;
    // initials?: string;
    // initialsColor?: TextColor;
    // innerIconView?: ReactElement;
    showCenterIcon?: boolean;
    showBgImage?: boolean;
    showBgColor?: boolean;
    sideIcon?: SideIcon;
    image?: string;
    bgColor?: Color;
    isSkeleton?: boolean | undefined;
    isEnabled?: boolean;
    containerClassName?: string;
    className?: string;
    dti?: string;
} & ({
    // innerViewType?: 'Initials';
    // initials: string;
} | {
    // innerViewType?: 'Icon';
});
