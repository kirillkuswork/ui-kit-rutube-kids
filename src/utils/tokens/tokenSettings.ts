import { DefaultColors } from 'tailwindcss/types/generated/colors';

import darkColorTokens from '../../tokens/colors/dark-theme.json';
import lightColorTokens from '../../tokens/colors/light-theme.json';
import opacityTokens from '../../tokens/opacity.json';
import gapTokens from '../../tokens/spacing/gap.json';
import fontTokens from '../../tokens/typography/fonts.json';
import { getTypedKeys } from '../typing/helpers';

type DefaultColor = keyof Pick<DefaultColors, 'inherit' | 'current' | 'transparent'>;

export const tokenSets = {
    colors: {
        default: ['inherit', 'current', 'transparent'] satisfies DefaultColor[],
        light: {
            text: [
                ...getTypedKeys(lightColorTokens.color.text),
            ],
            graphic: [
                ...getTypedKeys(lightColorTokens.color.graphic),
            ],
            background: [
                ...getTypedKeys(lightColorTokens.color.background),
            ],
            stroke: [
                ...getTypedKeys(lightColorTokens.color.stroke),
            ],
            overlay: [
                ...getTypedKeys(lightColorTokens.color.overlay),
            ],
        },
        dark: {
            text: [
                ...getTypedKeys(darkColorTokens.color.text),
            ],
            graphic: [
                ...getTypedKeys(darkColorTokens.color.graphic),
            ],
            background: [
                ...getTypedKeys(darkColorTokens.color.background),
            ],
            stroke: [
                ...getTypedKeys(darkColorTokens.color.stroke),
            ],
            overlay: [
                ...getTypedKeys(darkColorTokens.color.overlay),
            ],
        },
    },
    fontSize: {
        tokens: {
            default: ['inherit'] as const,
        },
        types: getTypedKeys(fontTokens.Font),
        devices: getTypedKeys(fontTokens.Font.Headline),
        sizes: getTypedKeys(fontTokens.Font.Headline.Desktop),
        textTypes: getTypedKeys(fontTokens.Font.Text),
        weightTypes: getTypedKeys(fontTokens.Font.Text.Default),
    },
    spacing: {
        tokens: getTypedKeys(gapTokens),
    },
    sizing: {
        tokens: getTypedKeys(gapTokens),
    },
    opacity: {
        tokens: getTypedKeys(opacityTokens.opacity),
    },
};

export const tokens = {
    colors: [
        ...tokenSets.colors.default,
        ...tokenSets.colors.light.text,
        ...tokenSets.colors.light.graphic,
        ...tokenSets.colors.light.background,
        ...tokenSets.colors.light.stroke,
        ...tokenSets.colors.light.overlay,
    ],
    fontSize: [],
    spacing: [
        ...tokenSets.spacing.tokens,
    ],
    sizing: [
        ...tokenSets.sizing.tokens,
    ],
    opacity: [
        ...tokenSets.opacity.tokens,
    ],
    grid: [],
    placement: [],
};
