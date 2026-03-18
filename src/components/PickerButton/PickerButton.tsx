import React, {
    forwardRef,
    useCallback,
    useState,
} from 'react';

import clsx from 'clsx';

import { colorClassBuilder } from '@/utils';

import { PickerButtonProps } from './types';
import { DataContent } from '../DataContent';
import { Dropdown } from '../Dropdown';
import { GenericWrapper } from '../GenericWrapper';
import { Popper } from '../Popper';
// Deprecated
export const PickerButton = forwardRef<HTMLButtonElement, PickerButtonProps>(
    (props, ref) => {
        const {
            onClick,
            className,
            isEnabled = true,
            isSelected,
            title = 'title',
            addonView,
            addonSide = 'start',
            xPaddings = '2x',
            yPaddings = '2x',
            dropdown,
            offsetX,
            offsetY = 8,
            ...btnAttrs

        } = props;

        const [isOpen, setIsOpen] = useState(false);

        const handleClick = () => {
            setIsOpen(!isOpen);
        };

        const handleOutsideClick = useCallback(() => {
            setIsOpen(false);
        }, []);

        const colorClassname = colorClassBuilder({
            type: 'text',
            color: 'tertiary',
        });

        return (
            <Popper
                isOpen={isOpen}
                onOutsideClick={handleOutsideClick}
                autoWidth
                offsetX={offsetX}
                offsetY={offsetY}
                content={
                    <Dropdown
                        {...dropdown}
                        options={dropdown.options}
                    />
                }
            >
                <button
                    ref={ref}
                    onClick={handleClick}
                    type='button'
                    className={clsx(
                        className,
                        isEnabled && !isSelected
                        && 'control-state-shade after:rounded-lg',
                        'relative flex items-center justify-center rounded-lg cursor-pointer border-transparent control-state',
                        !isEnabled && colorClassname,
                    )}
                    disabled={!isEnabled}
                    {...btnAttrs}
                >
                    <GenericWrapper
                        alignment='center'
                        addonSide={addonSide}
                        addonView={addonView}
                        xPaddings={xPaddings}
                        yPaddings={yPaddings}
                    >
                        <DataContent
                            title={title}
                        />
                    </GenericWrapper>
                </button>
            </Popper>
        );
    },
);
