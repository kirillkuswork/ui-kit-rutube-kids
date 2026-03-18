import React, { FC } from 'react';

import { SVG } from '@/assets/icons';
import {
    Button,
    Dropdown,
    Input,
} from '@/components';
import { Popper } from '@/components/Popper';

import { SearchProps } from './types';

export const DesktopSearch:FC<SearchProps> = ({
    className,
    isOpen,
    handleOutsideClick,
    dropdown,
    handleSubmit,
    handleOnChange,
    filteredOptions,
    variant,
    handleInputChange,
    handleClear,
    inputValue,
    handleFocus,
}) => (
    <div className={className}>
        <Popper
            isOpen={isOpen}
            onOutsideClick={handleOutsideClick}
            autoWidth
            content={
                <Dropdown {...dropdown}
                    onClick={handleOnChange}
                    options={filteredOptions}
                />
            }
        >
            <Input
                size='S'
                placeholder='placeholder'
                rightButton={
                    <Button onClick={handleSubmit} icon={<SVG.MagnifierIcon />} />
                }
                onChange={handleInputChange}
                onClear={handleClear}
                value={inputValue}
                variant={variant}
                onFocus={handleFocus}
            />
        </Popper>
    </div>
);
