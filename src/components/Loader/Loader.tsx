import React, { FC } from 'react';

import clsx from 'clsx';

import { SVG } from '@/assets/icons';
import { colorClassBuilder } from '@/utils';

import { LoaderProps } from './Loader.types';

const sizeValues = {
    xl3: 40,
    xl2: 32,
    xl: 24,
    l: 20,
    m: 16,
};

export const Loader: FC<LoaderProps> = (props) => {
    const {
        size,
        color = 'primary',
        className,
        ...restProps
    } = props;

    const iconColor = colorClassBuilder({
        type: 'text',
        color,
    });

    return (
        <SVG.LoaderIcon
            className={clsx(
                className,
                'animate-spin',
                'inline-block',
                iconColor,
            )}
            width={sizeValues[size]}
            height={sizeValues[size]}
            {...restProps}
        />
    );
};
