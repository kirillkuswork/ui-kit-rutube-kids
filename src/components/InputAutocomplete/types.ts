import { DropdownProps } from '@/components/Dropdown/types';
import { InputVariant } from '@/components/Input/Field/Field.types';

export type InputAutocompleteProps = {
    className?: string
    dropdown: DropdownProps
    isOpenDropdown?: boolean
    variant?: InputVariant
    handleSubmit?: () => void;
    handleSearchClose: () => void;
    isMobileSearchOpen?: boolean;
};
