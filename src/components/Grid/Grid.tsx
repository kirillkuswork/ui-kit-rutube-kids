import React, { FC } from 'react';

import clsx from 'clsx';

import {
    Breakpoints,
    GridColPropsType,
    GridColType,
    GridPropsType,
    GridRowPropsType,
    ScreenProps,
} from './types';

export const gridCommonGaps = 'gap-x-4x lg:gap-x-6x';
export const breakpoints: Breakpoints[] = ['sm', 'md', 'lg', 'xl'];

const Container: FC<GridPropsType> = ({ ...props }) => {
    const {
        children,
        gridType = 'default',
        className,
    } = props;

    return (
        <div className={clsx(
            gridCommonGaps,
            gridType === '3x4' && '!grid-cols-1 md:!grid-cols-3',
            gridType === '4x3' && '!grid-cols-2 md:!grid-cols-4',
            gridType === '8+4' && '!grid-cols-1 lg:!grid-cols-[1fr_288px]',
            gridType === 'default' && '!grid-cols-1',
            'relative grid gap-y-0 w-full px-4x lg:px-6x max-w-[1128px]',
            className,
        )}>
            {children}
        </div>
    );
};

const Row: FC<GridRowPropsType> = ({
    sm,
    md,
    lg,
    xl,
    children,
    className = '',
    ...props
}) => {
    const generateClass = (breakpoint: Breakpoints, value: ScreenProps | undefined) => [
        value?.columns && `${breakpoint}:grid-cols-${value.columns}`,
        value?.items && `${breakpoint}:place-items-${value.items}`,
    ].filter(Boolean).join(' ');

    const classes = clsx(
        className,
        gridCommonGaps,
        'w-full grid px-4x lg:px-6x',
        ...breakpoints.map((bp) => generateClass(bp, { sm, md, lg, xl }[bp])),
    );

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

const Col: FC<GridColPropsType> = ({
    sm,
    md,
    lg,
    xl,
    children,
    className = '',
    ...props
}) => {
    const generateClass = (breakpoint: Breakpoints, value: GridColType | undefined) => [
        value?.span && `${breakpoint}:col-span-${value.span}`,
        value?.offset && `${breakpoint}:col-start-${value.offset}`,
    ].filter(Boolean).join(' ');

    const classes = clsx(
        className,
        'w-full',
        ...breakpoints.map((bp) => generateClass(bp, { sm, md, lg, xl }[bp])),
    );

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};
export const Grid = {
    Container,
    Row,
    Col,
};
