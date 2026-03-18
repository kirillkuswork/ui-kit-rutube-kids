import {
    useEffect,
    useState,
} from 'react';

export const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export const debounce = <F extends (...args: any) => any>(
    func: F,
    delay: number,
) => {
    let timeout: ReturnType<typeof setTimeout>;

    const debounced = (...args: any) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };

    return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
