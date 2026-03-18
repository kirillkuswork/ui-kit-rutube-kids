import React, {
    ReactNode,
    InputHTMLAttributes,
    RefObject,
    MouseEvent,
    RefCallback,
    ReactElement,
} from 'react';

import {
    FieldSize,
    InputVariant,
} from './Field/Field.types';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    defaultValue?: string;
    innerLabel?: string;
    inputRef?: RefObject<HTMLInputElement>;
    inputCallbackRef?: RefCallback<HTMLInputElement>;
    onPressEnter?: React.KeyboardEventHandler;
    onClear?: (event: MouseEvent<HTMLDivElement>) => void;
    focusedThenMount?: boolean;
    error?: boolean;
    required?: boolean;
    inputClassName?: string;
    activateByValue?: boolean;
    wrapperClassName?: string;
    isEnabled?: boolean;
    iconView?: ReactNode;
    rightIcon?: ReactElement;
    leftValue?: string;
    rightValue?: string;
    placeholder: string
    // leftHint?: ReactNode;
    // rightHint?: ReactNode;
    rightButton?: ReactElement;
    size?: FieldSize;
    variant?: InputVariant;
    isLoading?: boolean;
    isSkeleton?: boolean;
    isCodeInput?: boolean
}
