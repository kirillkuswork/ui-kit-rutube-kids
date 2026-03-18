import React, { FC } from 'react';

import clsx from 'clsx';

import { SVG } from '@/assets/icons';
import {
    Button,
    Dropdown,
    Input,
} from '@/components';
import { Backdrop } from '@/components/Backdrop';
import { Popper } from '@/components/Popper';
import { colorClassBuilder } from '@/utils';

import { SearchProps } from './types';

export const MobileSearch:FC<SearchProps> = ({
    isOpen,
    handleOutsideClick,
    dropdown,
    handleOnChange,
    filteredOptions,
    handleSearchClose,
    handleInputChange,
    handleClear,
    inputValue,
    handleFocus,
}) => {
    const inputWrapperColor = colorClassBuilder({ type: 'background', color: 'primary' });

    return <Backdrop>
        <div className={clsx(
            inputWrapperColor,
            'p-4x rounded-b-4x flex items-center gap-x-4x w-full',
        )}>
            <Button variant='Link'
                size='M'
                iconColor="tertiary"
                icon={<SVG.ArrowIcon/>}
                onClick={handleSearchClose}
            />
            <Popper style={{ zIndex: 100, width: '100%', left: 0 }}
                isOpen={isOpen}
                onOutsideClick={handleOutsideClick}
                autoWidth
                content={
                    <Dropdown {...dropdown}
                        className='!top-[8px] fixed'
                        onClick={handleOnChange}
                        options={filteredOptions}
                    />
                }
            >
                <Input
                    size='XS'
                    placeholder='placeholder'
                    onChange={handleInputChange}
                    onClear={handleClear}
                    value={inputValue}
                    variant='Base'
                    onFocus={handleFocus}
                />
            </Popper>
        </div>
    </Backdrop>;
};
