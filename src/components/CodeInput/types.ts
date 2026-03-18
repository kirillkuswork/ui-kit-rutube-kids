import { HTMLAttributes } from 'react';

import { InputVariant } from '../Input/Field/Field.types';
import { InputProps } from '../Input/types';

export interface CodeInputProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    onChange?: (value: string) => void;
    error?: boolean;
    inputProps?: InputProps;
    errorMsg?: string;
    variant?: InputVariant
}
