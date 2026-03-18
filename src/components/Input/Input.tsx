import React, {
    ChangeEvent,
    cloneElement,
    FocusEvent,
    ReactElement,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import clsx from 'clsx';

import { SVG } from '@/assets/icons';
import { Typography } from '@/components';
import { ButtonProps } from '@/components/Button/types';
import { IconView } from '@/components/IconView';
import { IconViewProps } from '@/components/IconView/types';
import { colorClassBuilder } from '@/utils';

import { Field } from './Field';
import { InputProps } from './types';
import { Loader } from '../Loader';

const { Container, Wrapper, InnerLabel, InputSkeleton } = Field;

export const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
    const {
        variant = 'Island',
        size = 'M',
        iconView,
        rightIcon,
        rightButton,
        leftValue,
        rightValue,
        // leftHint,
        // rightHint,
        isLoading,
        isSkeleton,
        defaultValue = '',
        value: propsValue,
        inputRef,
        focusedThenMount,
        onFocus,
        onBlur,
        onChange,
        onKeyDown,
        onPressEnter,
        onCopy,
        onClear,
        isEnabled = true,
        className = '',
        innerLabel = 'Label',
        required,
        placeholder = 'Placeholder',
        error,
        inputClassName = '',
        wrapperClassName = '',
        activateByValue,
        isCodeInput = false,
        id,
        readOnly,
        inputCallbackRef,
        ...htmlInputProps
    } = props;

    const [focused, setFocused] = useState(false);
    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const [value, setValue] = useState(defaultValue);
    const optionalRef = useRef<HTMLInputElement>(null);
    const baseInputRef = inputRef || optionalRef;
    const currentValue = propsValue as string ?? value;
    const isActive = !!(activateByValue ? currentValue.length : (focused || currentValue.length));
    const isHiddenPlaceholder = (innerLabel && !isActive && (size === 'L' || size === 'M')) || (!innerLabel && focused);
    const showInnerLabel = size === 'L' || size === 'M';
    // const showHints = leftHint || rightHint;

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
        onFocus?.(event);
        setFocused(true);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        onBlur?.(event);
        setFocused(false);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChange?.(event);
    };

    const handleRemoveValue = (event: React.MouseEvent<HTMLDivElement>) => {
        setValue('');
        onClear?.(event);
        baseInputRef.current?.focus();
    };

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onPressEnter?.(event);
        }
        onKeyDown?.(event);
    };

    useEffect(() => {
        if (focusedThenMount && baseInputRef.current) {
            baseInputRef.current.selectionStart = currentValue.length;
            baseInputRef.current.selectionEnd = currentValue.length;
            baseInputRef.current.focus();
        }
    }, [focusedThenMount]);

    useEffect(() => {
        inputCallbackRef?.(baseInputRef.current);
    }, [baseInputRef, inputCallbackRef]);

    useEffect(() => {
        setShowPlaceholder(true);
    }, [focused]);

    const iconViewClone = useMemo(() => {
        const iconViewSize = () => {
            switch (size) {
                case 'S':
                    return 'XL';
                case 'XS':
                    return 'L';
                default:
                    return 'XXL';
            }
        };

        // TODO сверить с макетами и поправить, когда будет сделана задача по IconView RUP-12835

        return iconView && <div>{cloneElement(
            iconView as ReactElement<IconViewProps>,
            { size: iconViewSize(), className: '!z-20 !relative' },
        )}</div>;
    }, [rightButton, size]);

    const rightButtonClone = useMemo(() => {
        const buttonSize = () => {
            switch (size) {
                case 'S':
                    return 'M';
                case 'XS':
                    return 'S';
                default:
                    return 'L';
            }
        };

        return rightButton && cloneElement(
            rightButton as ReactElement<ButtonProps>,
            { size: buttonSize(), isEnabled },
        );
    }, [rightButton, size, isEnabled]);

    const [
        secondaryTextColor,
        placeholderColor,
        transparentColor,
        primaryTextColor,
        disabledTextColor,
    ] = colorClassBuilder([
        { type: 'text', color: isEnabled ? 'secondary' : 'disabled' },
        { type: 'text', color: 'secondary', prefix: 'placeholder' },
        { type: 'background', color: 'transparent' },
        { type: 'text', color: 'primary' },
        { type: 'text', color: 'disabled' },
        // { type: 'text', color: 'Disabled', prefix: 'placeholder' },
    ]);

    const leftValueRender = <Typography
        textType='Paragraph'
        size='M'
        fontType='Text'
        color={isEnabled ? 'secondary' : 'disabled'}
    >{leftValue}</Typography>;

    const rightValueRender = rightValue && <Typography
        textType='Paragraph'
        size='M'
        fontType='Text'
        color={isEnabled ? 'secondary' : 'disabled'}
    >{rightValue}</Typography>;

    const rightIconRender = rightIcon && <div className={size === 'L' || size === 'M' ? 'w-6x' : 'w-4x'}>{rightIcon}</div>;

    return (
        <Container
            disabled={!isEnabled}
            size={size}
            className={clsx(className, 'w-full')}
            onClick={props.onClick}
            id={id}
        >
            {isSkeleton && <InputSkeleton />}

            {!isSkeleton && <Wrapper
                isIconView={!!iconViewClone}
                isSkeleton={isSkeleton}
                className={wrapperClassName}
                focused={focused}
                disabled={!isEnabled}
                ref={ref}
                error={error}
                variant={variant}
                onPointerUp={() => {
                    baseInputRef.current?.focus();
                }}
            >

                {iconViewClone}
                {leftValueRender}

                <InnerLabel
                    isEnabled={isEnabled}
                    isActive={isActive}
                    onMouseDown={(e) => {
                        if (isActive && !currentValue.length) {
                            e.preventDefault();
                        }
                    }}
                    label={showInnerLabel && innerLabel}
                >
                    <div className='z-10'>
                        <input
                            id={id}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            onKeyDown={handleInputKeyDown}
                            className={clsx(
                                isHiddenPlaceholder ? '!placeholder-transparent' : `${placeholderColor} placeholder:duration-200`,
                                'w-full focus:outline-none border-0 text-paragraph-s text-ellipsis text-Text-Paragraph-Regular-M',
                                (size === 'L' || size === 'M') && 'pb-0',
                                primaryTextColor,
                                transparentColor,
                                inputClassName,
                                !isEnabled && disabledTextColor,
                            )}
                            placeholder={showPlaceholder ? placeholder : ''}
                            value={currentValue}
                            ref={baseInputRef}
                            disabled={readOnly || !isEnabled}
                            readOnly={isSkeleton || readOnly}
                            enterKeyHint="enter"
                            {...htmlInputProps}
                        />
                    </div>
                </InnerLabel>

                <div className={clsx(
                    secondaryTextColor,
                    'flex items-center justify-end gap-x-1x !z-20',
                )}>
                    {isLoading && isEnabled && <Loader className={primaryTextColor} size='xl' />}
                    {currentValue && !isCodeInput
                        && <div onClick={(event) => handleRemoveValue(event)}>
                            <IconView
                                className='relative !z-20 cursor-pointer'
                                bgColor='transparent'
                                showBgColor
                                showCenterIcon
                                centerIcon={
                                    {
                                        icon: <SVG.CrossIcon className='h-4x' />,
                                        iconColor: 'secondary',
                                    }
                                }
                            />
                        </div>}
                    {rightIconRender}
                    {rightValueRender}
                    {rightButtonClone}
                </div>

            </Wrapper>}

            {/* Hints будут во втором релизе */}

            {/* {!isSkeleton && !!showHints && <Hints */}
            {/*    leftHint={leftHint} */}
            {/*    rightHint={rightHint} */}
            {/*    error={error} */}
            {/* />} */}
        </Container>
    );
});
