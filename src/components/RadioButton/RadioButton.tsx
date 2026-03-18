import React, {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    useEffect,
    useState,
} from 'react';

import clsx from 'clsx';

import { colorClassBuilder } from '@/utils';

export interface RadioButtonPropsType extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    isEnabled?: boolean
    isSelected?: boolean
    label?: string
}
export const RadioButton = forwardRef<HTMLInputElement, RadioButtonPropsType>(
    (props, ref) => {
        const {
            className,
            isEnabled = true,
            isSelected = false,
            onChange = () => {},
            label = '',
            ...restProps
        } = props;

        const [isChecked, setIsChecked] = useState(false);

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setIsChecked(event.target.checked);
            onChange?.(event);
        };

        useEffect(() => {
            setIsChecked(isSelected);
        }, [isSelected]);

        const [
            iconBgColor,
            enabledBgColor,
            unSelectedBgColor,
            borderColor,
            disabledBgColor,
            disabledText,
        ] = colorClassBuilder([
            { type: 'graphic', color: isEnabled ? 'primary' : 'tertiary', invertion: isEnabled, prefix: 'after' },
            { type: 'graphic', color: 'brand' },
            { type: 'background', color: 'secondary' },
            { type: 'stroke', color: 'tertiary', prefix: 'disabled' },
            { type: 'background', color: 'transparent', prefix: 'disabled' },
            { type: 'text', color: 'tertiary' },
        ]);

        return (
            <div className='relative !m-0 rounded-full'>
                <label htmlFor="radio"
                    className={clsx(
                        isEnabled && 'control-state-shade after:rounded-full',
                        'h-[20px] w-[20px] rounded-full z-20 absolute cursor-pointer top-1/2 -translate-y-1/2',
                    )}>
                    {isChecked && <div className={clsx(
                        iconBgColor,
                        'cursor-pointer rounded-full absolute z-10 w-full !h-[20px] after:control-state-shade',
                        "after:content-[''] after:h-[8px] after:w-[8px] after:!absolute after:rounded-full after:left-[50%] after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:!z-100",
                    )}/>}
                </label>

                <input
                    id="radio"
                    disabled={!isEnabled}
                    type="radio"
                    className={clsx(
                        className,
                        isChecked ? enabledBgColor : unSelectedBgColor,
                        disabledBgColor,
                        borderColor,
                        'absolute z-10 rounded-full appearance-none h-[20px] w-[20px] top-1/2 -translate-y-1/2',
                        'disabled:border-[1px]',
                    )}
                    onChange={handleChange}
                    checked={isChecked}
                    ref={ref}
                    {...restProps}
                />

                {Boolean(label) && (
                    <label
                        htmlFor="radio"
                        className={clsx(
                            'ml-[28px] cursor-pointer text-[14px]',
                            !isEnabled && disabledText,
                        )}
                    >
                        {label}
                    </label>
                )}

            </div>
        );
    },
);
