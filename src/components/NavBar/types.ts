import { HTMLAttributes } from 'react';

export interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string
    isActive?: boolean
    isLoading?: boolean
    icon?: string
    shapeIcon?: string
}

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
    isLoading?: boolean
    isActive?: boolean
}
