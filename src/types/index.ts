import {
    tokens,
    tokenSets,
} from '@/utils/tokens/tokenSettings';

type DefaultColor = typeof tokenSets.colors.default[number];

type Color = typeof tokens.colors[number];
type ColorType = keyof typeof tokenSets.colors.light;
type Spacing = Exclude<typeof tokenSets.spacing.tokens[number], 'Module'>;
type Sizing = Exclude<typeof tokenSets.sizing.tokens[number], 'Module'>;
type Opacity = typeof tokens.opacity[number];
type CustomFontType = typeof tokenSets.fontSize.types[number];
type CustomFontSize = typeof tokenSets.fontSize.sizes[number];
type CustomFontWeight = typeof tokenSets.fontSize.weightTypes[number];
type CustomFontTextTypes = typeof tokenSets.fontSize.textTypes[number];
type TextColor = typeof tokenSets.colors.light.text[number] | DefaultColor;

export type {
    TextColor,
    DefaultColor,
    Color,
    ColorType,
    Spacing,
    Sizing,
    Opacity,
    CustomFontType,
    CustomFontSize,
    CustomFontWeight,
    CustomFontTextTypes,
};
