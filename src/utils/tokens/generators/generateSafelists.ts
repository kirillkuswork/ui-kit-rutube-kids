import { SafelistConfig } from 'tailwindcss/types/config';

import { Breakpoints } from '@/components/Grid/types';

import lightColorTokens from '../../../tokens/colors/light-theme.json';
import {
    getTypedKeys,
    getTypedObjectEntries,
} from '../../typing/helpers';
import {
    tokenSets,
    tokens,
} from '../tokenSettings';

const breakpoints = ['sm', 'md', 'lg', 'xl'] satisfies Breakpoints[];

const generateSafeColors = (
    tokenSet: string[],
) => {
    const colorings = ['bg', 'border', 'text', 'fill'] as const;
    const themes = ['light', 'dark'] as const;
    const purposes = getTypedKeys(lightColorTokens.color);
    const directions = ['inverted'] as const;
    const getPattern = (theme: typeof themes[number]) => new RegExp(`(${colorings.join('|')})(-(${theme}))?(-(${purposes.join('|')}))?-(${tokenSet.join('|')})(-(${directions.join('|')}))?`, 'g');
    const defaultVariants = ['after', 'before', 'hover', 'active', 'focus', 'disabled'];

    return [
        {
            pattern: getPattern('light'),
            key: 'color', // нужен для colorClassBuilder
            variants: defaultVariants,
        },
        {
            pattern: getPattern('dark'),
            key: 'color',
            variants: ['dark', ...defaultVariants],
        },
    ];
};

const generateSafeFonts = (
    tokenSet: string[],
) => {
    const { types, devices, sizes, textTypes, weightTypes } = tokenSets.fontSize;
    const headlinePattern = new RegExp(`text-(${types[0]})-(${devices.join('|')})-(${sizes.join('|')})`, 'g');
    const textPattern = new RegExp(`text-(${types[1]})-(${textTypes.join('|')})-(${weightTypes.join('|')})-(${sizes.join('|')})`, 'g');
    const defaultPattern = new RegExp(`text-(${tokenSet.join('|')})`, 'g');
    const pattern = new RegExp(`(${headlinePattern.source})|(${textPattern.source})|(${defaultPattern.source})`, 'g');

    return {
        pattern,
        key: 'font',
    };
};

const generateSafeSpacing = (
    tokenSet: string[],
) => {
    const spacings = ['p', 'pl', 'pt', 'pr', 'pb', 'py', 'px', 'm', 'mt', 'mb', 'mr', 'ml', 'my', 'mx', 'rounded', 'border'] as const;

    return {
        pattern: new RegExp(`${spacings.join('|')}-(${tokenSet.join('|')})`, 'g'),
        variants: breakpoints,
    };
};

const generateSafeSizing = (
    tokenSet: string[],
) => {
    const sizings = ['h', 'min-h', 'max-h', 'w', 'min-w', 'max-w'] as const;

    return {
        pattern: new RegExp(`${sizings.join('|')}-(${tokenSet.join('|')})`, 'g'),
    };
};

const generateSafeGrid = () => {
    const gridConfig = ['grid-cols', 'col-span', 'col-start'] as const;

    return {
        pattern: new RegExp(`${gridConfig.join('|')}-([1-9]|1[0-2])`, 'g'),
        variants: breakpoints,
    };
};

const generateSafePlacement = () => {
    const placements = ['start', 'center', 'baseline', 'stretch', 'end'] as const;

    return {
        pattern: new RegExp(`place-items-(${placements.join('|')})`, 'g'),
        variants: breakpoints,
    };
};

const generators = {
    colors: generateSafeColors,
    fontSize: generateSafeFonts,
    spacing: generateSafeSpacing,
    sizing: generateSafeSizing,
    grid: generateSafeGrid,
    placement: generateSafePlacement,
    opacity: null,
};

const generateSafelist = (
    list: Record<keyof typeof tokens, string[]>,
) => getTypedObjectEntries(list).reduce((
    safelist: SafelistConfig,
    [type, tokenNames],
) => {
    const generator = generators[type];
    if (generator) {
        const safelistedTokens = generator(tokenNames);
        if (Array.isArray(safelistedTokens)) {
            safelist.push(...safelistedTokens);
        } else {
            safelist.push(safelistedTokens);
        }
    }

    return safelist;
}, []);

export const configSafelist = generateSafelist(tokens);
