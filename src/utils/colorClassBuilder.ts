import {
    Color,
    ColorType,
    DefaultColor,
} from '@/types';
import { configSafelist } from '@/utils/tokens/generators';

import { tokenSets } from './tokens/tokenSettings';

type BuilderT = {
    type: ColorType;
    color: Color;
    invertion?: boolean;
    as?: ColorType;
    prefix?: 'after' | 'before' | BuilderT['postfix'];
    postfix?: 'disabled' | 'hover' | 'focus' | 'active' | 'placeholder';
};

type SafelistPattern = Exclude<typeof configSafelist[number], string> & Partial<{ key: string }>;

const isDefaultColor = (color: Color): color is DefaultColor => {
    const { default: defaultKeys } = tokenSets.colors;

    return defaultKeys.some((key) => key === color);
};

const prefixes = {
    text: 'text',
    graphic: 'bg',
    background: 'bg',
    stroke: 'border',
    overlay: 'bg',
} as const;

export function colorClassBuilder(props: BuilderT): string;
export function colorClassBuilder(props: BuilderT[]): string[];

export function colorClassBuilder(props: BuilderT | BuilderT[]) {
    if (Array.isArray(props)) {
        return props.map((prop) => colorClassBuilder(prop));
    }
    const {
        type,
        color,
        invertion = false,
        as,
        prefix,
        postfix,
    } = props;
    const getPrefix = () => {
        const prefixName = prefixes[as ?? type];
        const prefixText = prefix ? `${prefix}:` as const : '';

        return `${prefixText}${prefixName}-` as const;
    };

    const getPostfix = () => {
        if (!postfix) {
            return '';
        }

        return `/${postfix}` as const;
    };

    if (isDefaultColor(color)) {
        return getPrefix() + color;
    }
    const getColor = (
        theme: 'light' | 'dark',
    ) => `${theme}-${type}-${color}${invertion ? '-inverted' : ''}` as const;

    const getClassName = (
        theme: 'light' | 'dark' = 'light',
    ) => `${getPrefix()}${getColor(theme)}${getPostfix()}` as const;

    const defaultClass = getClassName();
    const darkClass = `dark:${getClassName('dark')}` as const;

    const classNames = [defaultClass, darkClass];

    const colorPatterns = configSafelist?.filter((
        pattern,
    ) => (pattern as SafelistPattern)?.key === 'color') as SafelistPattern[];

    const isSafe = colorPatterns.every((
        colorPattern,
        index,
    ) => classNames[index]?.match(colorPattern.pattern));

    if (!isSafe) {
        console.error(`Не получилось применить цвет "${color}", ${defaultClass}`);

        return '';
    }

    return classNames.join(' ');
}
