import {
    HTMLAttributes,
    ReactNode,
} from 'react';

export type Breakpoints = 'sm' | 'md' | 'lg' | 'xl';

export type PlaceItems = 'start' | 'center' | 'baseline' | 'stretch' | 'end';

export type Columns = 3 | 4 | 6 | 8 | 12;

export type GridColType = {
    span: number;
    offset?: number;
};

export interface GridPropsType {
    children?: ReactNode,
    gridType?: '3x4' | '4x3' | '8+4' | 'default',
    className?: string
}

export interface GridConfigType {
    span: Record<Breakpoints, Record<number, string>>;
    offset: Record<Breakpoints, Record<number, string>>;
    columns: Record<Breakpoints, Record<Columns, string>>;
    items: Record<Breakpoints, Record<PlaceItems, string>>;
}
export interface ScreenProps {
    columns?: Columns;
    items?: PlaceItems;
}
export interface GridRowPropsType extends HTMLAttributes<HTMLDivElement> {
    sm?: ScreenProps;
    md?: ScreenProps;
    lg?: ScreenProps;
    xl?: ScreenProps;
    children?: ReactNode;
    className?: string
}

export interface GridColPropsType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    sm?: GridColType;
    md?: GridColType;
    lg?: GridColType;
    xl?: GridColType;
}
