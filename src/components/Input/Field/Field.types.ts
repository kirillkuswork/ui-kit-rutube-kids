import {
    HTMLAttributes,
    ReactNode,
} from 'react';

export type FieldSize = 'L' | 'M' | 'S' | 'XS';
export type InputVariant = 'Island' | 'Base';

export interface IFieldCtx {
    size: FieldSize;
    disabled?: boolean;
    id?: string;
    largeField?: boolean;
}

export type FieldContainerProps = HTMLAttributes<HTMLDivElement> & IFieldCtx;

export interface FieldWrapperProps extends HTMLAttributes<HTMLDivElement> {
    focused?: boolean;
    disabled?: boolean;
    error?: boolean;
    variant: InputVariant
    isSkeleton?: boolean
    isIconView?: boolean
}

export interface FieldInnerLabelProps extends HTMLAttributes<HTMLLabelElement> {
    label?: ReactNode;
    isActive?: boolean;
    isEnabled?: boolean
}
export interface FieldHintProps extends HTMLAttributes<HTMLDivElement> {
    leftHint?: ReactNode;
    rightHint?: ReactNode;
    error?: boolean;
}
