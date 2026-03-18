import { getTypedObjectFromEntries } from '../../typing/fromEntries';
import { getTypedObjectEntries } from '../../typing/helpers';

export type NestedValues<T> = {
    [key: string]: T | NestedValues<T>;
};

export const parseTokensFromJSON = <T>(
    tokenSet: Record<string, Record<string, T>>,
) => getTypedObjectFromEntries(getTypedObjectEntries(tokenSet)
    .map(([key, { $value }]) => [
        key, $value ?? '',
    ]));

const flattenTokens = (tokens: Record<string, any>) => {
    const result = {} as Record<string, any>;

    Object.keys(tokens).forEach((key) => {
        if (Array.isArray(tokens[key])) {
            result[key] = tokens[key];
        } else if (typeof tokens[key] === 'object' && tokens[key] !== null) {
            const nestedResult = flattenTokens(tokens[key]);
            Object.keys(nestedResult).forEach((nestedKey) => {
                result[nestedKey] = nestedResult[nestedKey];
            });
        }
    });

    return result;
};

export const mergeTokens = (originalObject: Record<string, any>) => {
    let mergedObject = {};
    Object.keys(originalObject).forEach((key) => {
        const newTokens = flattenTokens(originalObject[key]);
        mergedObject = { ...mergedObject, ...newTokens };
    });

    return mergedObject;
};
