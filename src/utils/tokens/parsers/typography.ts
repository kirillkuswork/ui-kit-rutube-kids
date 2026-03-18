import { ThemeConfig } from 'tailwindcss/types/config';

import { NestedValues } from './common';

type Values = 'fontFamily' | 'fontWeight' | 'lineHeight' | 'fontSize' | 'letterSpacing';

type TypographyValue = {
    value: {
        [key in Values]?: string;
    };
    type: string;
};

type TailwindFont = [
    fontSize: string,
    configuration: Partial<{
        lineHeight: string
        letterSpacing: string
        fontWeight: string | number
    }>,
];

const fontWeightOpenApiSpec = {
    Thin: '100',
    ExtraLight: '200',
    Light: '300',
    Regular: '400',
    Medium: '500',
    SemiBold: '600',
    Bold: '700',
    ExtraBold: '800',
    Black: '900',
    ExtraBlack: '950',
};

const getFont = (fontName: TypographyValue['value']) => ((Object
    .entries(fontName) as Entries<typeof fontName>)
    .reduce((acc, font) => {
        if (!font) {
            return acc;
        }
        const [fontKey, fontValue] = font;
        if (fontKey === 'fontSize') {
            const fontSize = `${fontValue}px`;

            return [fontSize, acc[1]] satisfies TailwindFont;
        }
        if (fontKey === 'fontFamily') {
            const configuration = {
                ...acc[1],
                [fontKey]: fontValue,
            };

            return [acc[0], configuration] satisfies TailwindFont;
        }

        if (fontKey === 'fontWeight') {
            const fontWeight = fontValue as keyof typeof fontWeightOpenApiSpec;
            const configuration = { ...acc[1],
                [fontKey]: fontValue
                    ? fontWeightOpenApiSpec[fontWeight]
                    : fontValue };

            return [acc[0], configuration] satisfies TailwindFont;
        }

        if (fontKey === 'lineHeight') {
            const configuration = {
                ...acc[1],
                [fontKey]: `${fontValue}px`,
            };

            return [acc[0], configuration] satisfies TailwindFont;
        }

        const configuration = {
            ...acc[1],
            [fontKey]: fontValue,
        };

        return [acc[0], configuration] satisfies TailwindFont;
    }, ['', {}] as TailwindFont));

export const parseTypographyTokensFromNestedJSON = (
    tokenSet: NestedValues<TypographyValue>,
    prefix = '',
): ThemeConfig['fontSize'] => Object.fromEntries(Object
    .entries(tokenSet)
    .map((token) => {
        const [key, value] = token;
        const newPrefix = prefix ? `${prefix}-${key}` : key;
        if (value.type) {
            const fontValues = value.value as TypographyValue['value'];
            const font = getFont(fontValues);

            return [newPrefix, font];
        }

        return [
            key,
            parseTypographyTokensFromNestedJSON(
                value as NestedValues<TypographyValue>,
                newPrefix,
            ),
        ];
    }));
