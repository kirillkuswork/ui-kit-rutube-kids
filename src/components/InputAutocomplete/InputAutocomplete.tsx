import React, {
    FC,
    useCallback,
    useMemo,
    useState,
} from 'react';

import { DropdownItemOnClickType } from '@/components/Dropdown/types';
import { DesktopSearch } from '@/components/InputAutocomplete/Search/DesktopSearch';
import { MobileSearch } from '@/components/InputAutocomplete/Search/MobileSearch';
import { InputAutocompleteProps } from '@/components/InputAutocomplete/types';
import { useActiveBreakpoint } from '@/utils/hooks/useActiveBreakpoint';
import { useDebounce } from '@/utils/hooks/useDebounce';

export const InputAutocomplete: FC<InputAutocompleteProps> = ({
    className,
    dropdown,
    handleSubmit,
    handleSearchClose,
    isMobileSearchOpen,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 200);
    const { windowSize: { sm: isMobile } } = useActiveBreakpoint();

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    const handleClear = useCallback(() => {
        setInputValue('');
    }, []);

    const handleFocus = useCallback(() => {
        setIsOpen(true);
    }, []);

    const handleOutsideClick = useCallback(() => {
        setIsOpen(false);
    }, []);

    const filteredOptions = useMemo(
        // eslint-disable-next-line max-len
        () => dropdown.options?.filter((option) => option.value.toLowerCase().includes(debouncedValue.toLowerCase())).slice(0, 5),
        [debouncedValue, dropdown.options],
    );

    const handleOnChange = useCallback((params: DropdownItemOnClickType) => {
        setInputValue(params.option.value);
        setIsOpen(false);
    }, []);

    const searchProps = {
        handleOnChange,
        filteredOptions,
        handleOutsideClick,
        handleInputChange,
        handleClear,
        inputValue,
        handleFocus,
        dropdown,
        handleSearchClose,
        isOpen,
        ...props,
    };

    return (
        isMobile && isMobileSearchOpen
            ? <MobileSearch {...searchProps}/>
            : <DesktopSearch {...searchProps} />
    );
};
