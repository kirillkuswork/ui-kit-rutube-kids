import {
    useEffect,
    useState,
} from 'react';

import { useBreakpoints } from './useBreakpoints';
import { debounce } from './useDebounce';
import { getTypedObjectEntries } from '../typing/helpers';

type Breakpoint = Awaited<ReturnType<typeof useBreakpoints>>['breakpoints']['xl'];

type WindowSize = {
    [key in Breakpoint['key']]: boolean;
};
export const useActiveBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>();
    const { breakpoints } = useBreakpoints();
    const { md, lg, xl } = breakpoints;
    const [windowSize, setWindowSize] = useState<WindowSize>({
        sm: false,
        md: false,
        lg: false,
        xl: false,
    });

    const breakpointsList = getTypedObjectEntries(breakpoints).map(([key, { value }]) => ({
        key,
        value,
    }));
    const updateBreakpoint = () => {
        const width = window.innerWidth;
        const newBreakpoints = {
            sm: width < md.value,
            md: width >= md.value && width < lg.value,
            lg: width >= lg.value && width < xl.value,
            xl: width >= xl.value,
        };
        setWindowSize(newBreakpoints);

        const reversedBreakpoints = [...breakpointsList].reverse();
        const activeBreakpoint = reversedBreakpoints.find(({ value }) => width >= value);

        if (activeBreakpoint) {
            setBreakpoint(activeBreakpoint);
        }
    };

    const debouncedUpdateBreakpoint = debounce(updateBreakpoint, 100);

    useEffect(() => {
        window.addEventListener('resize', debouncedUpdateBreakpoint);

        return () => {
            window.removeEventListener('resize', debouncedUpdateBreakpoint);
        };
    }, [breakpointsList]);

    useEffect(() => {
        updateBreakpoint();
    }, []);

    return { activeBreakpoint: breakpoint, breakpointsList, windowSize };
};
