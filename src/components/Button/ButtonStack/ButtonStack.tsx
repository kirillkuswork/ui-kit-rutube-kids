import React, {
    cloneElement,
    FC,
    ReactElement,
    useMemo,
} from 'react';

import clsx from 'clsx';

import {
    ButtonProps,
    ButtonStackProps,
} from '@/components/Button/types';

export const ButtonStack:FC<ButtonStackProps> = ({
    gap = '2x',
    className,
    firstButton,
    secondButton,
    isStretched = false,
    size,
    type = '2Buttons',
}) => {
    const firstButtonClone = useMemo(() => firstButton && cloneElement(
        firstButton as ReactElement<ButtonProps>,
        { fullWidth: isStretched, size },
    ), [isStretched, size]);

    const secondButtonClone = useMemo(() => secondButton && cloneElement(
        secondButton as ReactElement<ButtonProps>,
        { fullWidth: isStretched, size },
    ), [isStretched, size]);

    return <div className={clsx(className, `gap-${gap}`, 'flex w-full')}>
        {type === '2Buttons' ? <>{firstButtonClone} {secondButtonClone}</> : firstButtonClone}
    </div>;
};
