import {
    ReactElement,
    ReactNode,
    CSSProperties,
} from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
    Padding,
    Placement,
} from '@popperjs/core';

export interface PopperState {
    referenceElement: HTMLElement | null;
}

export interface PopperProps {
    isOpen: boolean;
    children: ReactElement;
    content?: ReactNode;
    placement?: Placement;
    offsetX?: number;
    offsetY?: number;
    onOutsideClick?: () => void;
    onOutsideMove?: () => void;
    autoWidth?: boolean;
    style?: CSSProperties;
    overflowPadding?: Padding;
    strategy?: 'fixed' | 'absolute';
    onInit?: (state: PopperState) => void;
}
