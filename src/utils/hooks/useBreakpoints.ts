import { useMemo } from 'react';

import { tailwindConfig } from '../../../tailwind.config';
import { getTypedObjectFromEntries } from '../typing/fromEntries';
import { getTypedObjectEntries } from '../typing/helpers';

const { screens } = tailwindConfig.theme;

export const useBreakpoints = () => useMemo(() => {
    const breakpoints = getTypedObjectFromEntries(
        getTypedObjectEntries(screens).map(
            ([key, value]) => [key, { value: parseInt(value, 10), key }],
        ),
    );

    return {
        breakpoints,
    };
}, [screens]);
