import { HTMLAttributes } from 'react';

export interface FavoriteCardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    value: string;
    src: string;
    alt?: string;
    isSelected?: boolean;
    isLoading?: boolean;
    htmlInputProps?: HTMLAttributes<HTMLInputElement>;
    wrapperClassName?: string;
}
