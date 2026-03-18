import { ThemeConfig } from 'tailwindcss/types/config';

import { NestedValues } from './common';
import baseColorTokens from '../../../tokens/colors/base.json';
import { getTypedObjectFromEntries } from '../../typing/fromEntries';
import { getTypedObjectEntries } from '../../typing/helpers';

type ColorValue = {
    $value: string | string[];
    $type: string;
};

export const parseBaseColorsTokens = (
    tokenSet: NestedValues<ColorValue>,
): any => getTypedObjectFromEntries(getTypedObjectEntries(tokenSet)
    .map((token) => {
        const [key, value] = token;
        if (value.$type) {
            return [key, value.$value];
        }

        return [key, parseBaseColorsTokens(value as NestedValues<ColorValue>)];
    }));

const baseTokensParsed = parseBaseColorsTokens(baseColorTokens);

export const parseBaseColor = (
    path: string,
): string => {
    if (!path.startsWith('{') || !path.endsWith('}')) {
        return path;
    }

    const token = path.slice(1, -1);
    const pathParts = token.split('.');
    const value = pathParts.reduce(
        (acc, part) => acc?.[part],
        baseTokensParsed,
    );

    return value;
};

export const parseColorTokensFromBaseTokens = (
    tokenSet: NestedValues<ColorValue>,
): ThemeConfig['colors'] => Object.fromEntries(Object
    .entries(tokenSet)
    .map((token) => {
        const [key, value] = token;
        if (value.$type) {
            const colorValue = value.$value as string;

            return [key, parseBaseColor(colorValue)];
        }

        return [key, parseColorTokensFromBaseTokens(value as NestedValues<ColorValue>)];
    }));
