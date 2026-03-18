import React from 'react';

import { DropdownItemType } from '@/components/Dropdown/DropdownItem/types';
import { DropdownItemOnClickType } from '@/components/Dropdown/types';
import { InputAutocompleteProps } from '@/components/InputAutocomplete/types';

export type SearchProps = {
    className?: string;
    isOpen: boolean
    handleOutsideClick?: () => void
    handleOnChange: (params: DropdownItemOnClickType) => void
    filteredOptions?: DropdownItemType[]
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleClear: () => void
    inputValue: string
    handleFocus: () => void
} & InputAutocompleteProps;
