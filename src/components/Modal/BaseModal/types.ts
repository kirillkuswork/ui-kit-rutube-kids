import {
    HTMLAttributes,
    ReactNode,
} from 'react';

import { ButtonSize } from '@/components/Button/types';

import { ModalProps } from '../types';

export interface BaseModalProps extends Omit<ModalProps, 'title'> {
    animation?: boolean;
    showCloseButton?: boolean;
    anchor?: HTMLElement | null;
    type?: ModalPlacementType
    showOverlay?: boolean
}

export type ModalPlacementType = 'PopUp' | 'SidePanel';
export type ModalFooterVariantType = 'ButtonStack' | 'Custom';

export type TopContentGroupProps = HTMLAttributes<HTMLDivElement> & {
    dti?: string;
};

export type BottomContentGroupProps = HTMLAttributes<HTMLDivElement> & {
    showBottomGroup?: boolean
    dti?: string;
};

export type ModalFooterProps = HTMLAttributes<HTMLDivElement> & {
    type: ModalFooterVariantType
    size?: ButtonSize,
    showButtons?: boolean
    firstButton?: ReactNode,
    secondButton?: ReactNode,
    gap?: '2x' | '3x',
    isStretched?: boolean,
};
