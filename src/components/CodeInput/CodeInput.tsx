import React, {
    ChangeEvent,
    ClipboardEvent,
    KeyboardEvent,
    RefObject,
    useEffect,
    useMemo,
    useState,
} from 'react';

import clsx from 'clsx';

import { CodeInputProps } from './types';
import { Input } from '../Input';
import { TextLabel } from '../TextLabel';

export const CodeInput = (props: CodeInputProps) => {
    const {
        onChange,
        error,
        errorMsg = '',
        inputProps,
        variant = 'Island',
    } = props;

    const isError = errorMsg && error;
    const inputsCount = 4;

    const inputRefs: RefObject<HTMLInputElement>[] = useMemo(
        () => Array(inputsCount)
            .fill(null)
            .map(() => React.createRef<HTMLInputElement>()),
        [],
    );
    const [code, setCode] = useState<string[]>(Array(inputsCount).fill(''));

    useEffect(() => {
    // отдает введенное значение на выход
        onChange?.(code.join(''));
    }, [code]);

    const setFocus = (value: string, currentIndex: number): void => {
    // В инпут ввели значение -> переключаем на след инпут
        if (value) {
            inputRefs[currentIndex + 1]?.current?.focus();
        } else {
            // удалили значение из инпута -> переключаем на предыдущий инпут
            inputRefs[currentIndex - 1]?.current?.focus();
        }
    };

    const setValue = (value: string, currentIndex: number): void => {
        const updatedCode = [...code];
        updatedCode[currentIndex] = value;
        setCode(updatedCode);
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        currentIndex: number,
    ) => {
        const { value } = e.target;
        // запрет ввода чего-то, кроме цифр
        if (/\D/.test(value)) {
            return;
        }

        // тк в последнем инпуте нет возможности продолжать ввод в следующие
        if (value?.length > 1 && currentIndex === inputsCount - 1) {
            return;
        }

        // смена фокуса на любой инпут, кроме последнего, и продолжение ввода
        if (value?.length > 1) {
            // при смене фокуса ввод мы продолжаем в том инпуте,
            // где уже есть значение, поэтому необходимо отрезать лишнее
            const val = value.split('').pop() || '';
            setFocus(val, currentIndex);
            setValue(val, currentIndex + 1);

            return;
        }

        setValue(value, currentIndex);
        setFocus(value, currentIndex);
    };

    const handleKeyDownBackspace = (
        e: KeyboardEvent<HTMLInputElement>,
        currentIndex: number,
    ): void => {
        if (e.key === 'Backspace') {
            // если в инпуте пусто
            if (!code[currentIndex]) {
                setFocus('', currentIndex);
            }
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    // проверка при нажатие на +,-,e(экспоненту)
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handlePast = (e: ClipboardEvent<HTMLInputElement>): void => {
        e.preventDefault();
        // Достаем строчку, которую вставили в инпут
        const pastedValue: string[] = e.clipboardData.getData('Text').split('');
        // Отрезаем нужное кол-во, если это необходимо
        const values: string[] = pastedValue.length > inputsCount
            ? pastedValue.splice(0, inputsCount)
            : pastedValue;

        setCode(values);
    };

    return (
        <div>
            <div className="flex gap-x-2x w-[352px]">
                {inputRefs.map((inputRef, index) => (
                    <Input
                        isCodeInput
                        placeholder=''
                        variant={variant}
                        data-testid={`code-input-${index}`}
                        type="number"
                        size="L"
                        innerLabel=''
                        onWheel={(e) => e.currentTarget.blur()}
                        className={clsx(isError && 'mb-2x', '!min-w-[0px]')}
                        inputClassName="!text-Headline-Mobile-XL text-center !px-[0px] !py-[0px] !h-full"
                        wrapperClassName={'!h-[64px]'}
                        key={index}
                        inputRef={inputRef}
                        maxLength={1}
                        value={code[index]}
                        error={error}
                        onChange={(e) => handleInputChange(e, index)}
                        onPaste={(e) => handlePast(e)}
                        onKeyDown={(e) => handleKeyDownBackspace(e, index)}
                        onKeyPress={(event) => handleKeyPress(event)}
                        {...inputProps}
                    />
                ))}
            </div>
            {isError && (
                <TextLabel
                    topPadding={null}
                    leftPadding={null}
                    bottomPadding={null}
                    rightPadding={null}
                    size="S"
                    color="negative"
                >
                    {errorMsg}
                </TextLabel>
            )}
        </div>
    );
};
