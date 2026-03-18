import type { ThemeConfig } from 'tailwindcss/types/config';

import opacityTokens from '../../../tokens/opacity.json';
import fonts from '../../../tokens/typography/fonts.json';
import lightTokens from '../../../tokens/colors/light-theme.json';
import darkTokens from '../../../tokens/colors/dark-theme.json';
import gapTokens from '../../../tokens/spacing/gap.json';
import radiusTokens from '../../../tokens/spacing/radius.json';

import {
    parseTokensFromJSON,
    parseTypographyTokensFromNestedJSON,
    mergeTokens,
    parseColorTokensFromBaseTokens,
} from '../parsers';
import { getTypedKeys } from '../../typing/helpers';

type OpacityTokens = typeof opacityTokens;
type ColorTokens = typeof lightTokens & typeof darkTokens;
type TypographyTokens = typeof fonts;
type GapTokens = Record<'gap', typeof gapTokens>;
type RadiusTokens = Record<'radius', typeof radiusTokens>;

const generateTheme = (
    tokenSet: OpacityTokens & ColorTokens & TypographyTokens & RadiusTokens & GapTokens,
) => getTypedKeys(tokenSet).reduce((theme, set) => {
    if (set === 'color') {
        theme.colors = {
            light: {...parseColorTokensFromBaseTokens(lightTokens.color)},
            dark: {...parseColorTokensFromBaseTokens(darkTokens.color)},
            transparent: 'transparent',
            current: 'currentColor',
            inherit: 'inherit',
        };

        return theme;
    }
    if (set === 'Font') {
        theme.fontSize = mergeTokens(parseTypographyTokensFromNestedJSON(fonts.Font));

        return theme;
    }
    if (set === 'opacity') {
        theme.opacity = {
            ...parseTokensFromJSON(tokenSet[set]),
        };

        return theme;
    }
    if (set === 'gap') {
        const tokens = parseTokensFromJSON(tokenSet[set]) as ThemeConfig['gap'];
        theme.gap = tokens;
        theme.spacing = tokens
        // ручная установка значений spacing для размеров
        theme.minWidth = tokens;
        theme.minHeight = tokens;
        theme.maxWidth = tokens;
        theme.maxHeight = tokens;
        theme.margin = tokens;

        return theme;
    }
    if (set === 'radius') {
        const tokens = parseTokensFromJSON(tokenSet[set]) as ThemeConfig['borderRadius'];
        theme.borderRadius = tokens;
        theme.borderWidth = tokens;

        return theme;
    }

    const value = parseTokensFromJSON(tokenSet[set]);
    if (theme) {
        theme[set] = value;
    }

    return theme;
}, {} as ThemeConfig);

export const configTheme = generateTheme({
    ...opacityTokens,
    ...fonts,
    ...darkTokens,
    ...lightTokens,
    ...{gap: gapTokens},
    ...{radius: radiusTokens},
});
