import React, {
    ChangeEvent,
    forwardRef,
} from 'react';

import clsx from 'clsx';

import { SVG } from '@/assets/icons';
import { colorClassBuilder } from '@/utils';

export type CheckboxButtonPropsType = {
    className?: string;
    isSelected?: boolean;
    isDisabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
};

export const CheckboxButton = forwardRef<HTMLInputElement, CheckboxButtonPropsType>(
    (props, ref) => {
        const {
            className,
            isSelected = false,
            isDisabled = false,
            onChange,
            label = '',
            ...restProps
        } = props;

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            onChange?.(event);
        };

        const [
            iconColor,
            selectedBgColor,
            unSelectedBgColor,
            inputBgColor,
            disabledText,
            borderColor,
        ] = colorClassBuilder([
            { type: 'graphic', color: isSelected && !isDisabled ? 'primary' : 'tertiary', invertion: isSelected && !isDisabled, as: 'text' },
            { type: 'background', color: 'brand' },
            { type: 'background', color: 'tertiary' },
            { type: 'background', color: 'transparent' },
            { type: 'text', color: 'tertiary' },
            { type: 'stroke', color: 'tertiary' },
        ]);

        return <div className='relative flex'>
            <div>
                <label htmlFor="checkbox"
                    className={clsx(
                        'h-[20px] w-[20px] z-20 rounded-1x absolute cursor-pointer top-1/2 -translate-y-1/2',
                        isDisabled ? `${borderColor} border-[1px]` : 'control-state-shade after:rounded-1x',
                        isSelected && !isDisabled && selectedBgColor,
                        !isSelected && !isDisabled && unSelectedBgColor,
                    )}>
                    {isSelected && <SVG.CheckBoxArrowIcon className={clsx('absolute z-30 w-5x', iconColor)} />}
                </label>

                <input
                    id="checkbox"
                    disabled={isDisabled}
                    type="checkbox"
                    className={clsx(className, inputBgColor, 'relative z-10 appearance-none h-[20px] w-[20px]')}
                    onChange={handleChange}
                    checked={isSelected}
                    ref={ref}
                    {...restProps}
                />
            </div>

            {Boolean(label) && (
                <label
                    htmlFor="checkbox"
                    className={clsx(
                        'ml-[28px] cursor-pointer text-[14px]',
                        isDisabled && disabledText,
                    )}
                >
                    {label}
                </label>
            )}
        </div>;
    },
);
