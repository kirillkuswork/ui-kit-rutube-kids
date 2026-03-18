import { ReactNode } from 'react';

import { DropdownProps } from '@/components/Dropdown/types';

export type DropdownWrapperProps = Pick<DropdownProps, 'isLoading' | 'bgColor' | 'className'> & {
    children?: ReactNode
};
