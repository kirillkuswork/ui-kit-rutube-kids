import React, {
    ChangeEvent,
    forwardRef,
    useEffect,
    useState,
} from 'react';

import clsx from 'clsx';

import { colorClassBuilder } from '@/utils';

import { NewSkeleton } from '../NewSkeleton';

export type ToggleButtonPropsType = {
    isSelected?: boolean
    isDisabled?: boolean
    isLoading?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
};

export const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonPropsType>((props, ref) => {
    const {
        onChange,
        isLoading = false,
        isSelected = false,
        isDisabled = false,
        label = '',
        ...restProps
    } = props;
    const [isChecked, setIsChecked] = useState(isSelected);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        onChange?.(event);
    };
    useEffect(() => {
        setIsChecked(isSelected);
    }, [isSelected]);

    const [
        borderColor,
        iconColor,
        selectedBgColor,
        inputBgColor,
        unSelectedBgColor,
        disabledText,
    ] = colorClassBuilder([
        { type: 'stroke', color: isDisabled ? 'tertiary' : 'transparent' },
        { type: 'graphic', color: isDisabled ? 'tertiary' : 'primary', invertion: !isDisabled },
        { type: 'background', color: 'brand' },
        { type: 'background', color: 'transparent' },
        { type: 'background', color: 'tertiary' },
        { type: 'text', color: 'tertiary' },
    ]);

    return <div className='relative flex gap-[8px] h-[20px] items-center'>
        <NewSkeleton isLoading={isLoading}>
            <label htmlFor="toggle"
                className={clsx(
                    borderColor,
                    !isDisabled ? 'control-state-shade after:rounded-l-5x after:rounded-r-5x' : inputBgColor,
                    !isDisabled && selectedBgColor,
                    !isChecked && !isDisabled && unSelectedBgColor,
                    'border-[1px] border-solid h-[20px] w-[32px] rounded-l-5x rounded-r-5x cursor-pointer absolute z-10 transition duration-100 ease-linear top-1/2 -translate-y-1/2',

                )}>
                <div className={clsx(
                    'z-30 w-[12px] h-[12px] rounded-full top-[9px] translate-y-[-50%] translate-x-[3px] relative transition duration-100 ease-linear',
                    isChecked && '!translate-x-[15px]',
                    iconColor,
                )}/>
            </label>
        </NewSkeleton>
        <input
            id="toggle"
            disabled={isDisabled}
            type="checkbox"
            className={clsx(
                inputBgColor,
                'appearance-none absolute rounded-l-5x rounded-r-5x w-[32px] h-[20px] z-1',
            )}
            onChange={handleChange}
            checked={isChecked}
            ref={ref}
            {...restProps}
        />

        {Boolean(label) && (
            <NewSkeleton isLoading={isLoading}>
                <label
                    htmlFor="toggle"
                    className={clsx(
                        'ml-[32px] cursor-pointer text-[14px] h-[20px] inline-block',
                        isDisabled && disabledText,
                    )}
                >
                    {label}
                </label>
            </NewSkeleton>
        )}
    </div>;
});
