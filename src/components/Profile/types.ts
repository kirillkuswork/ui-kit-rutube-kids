import {
    HTMLAttributes,
    ReactNode,
} from 'react';

export interface ProfileProps extends HTMLAttributes<HTMLDivElement> {
    isLoading?: boolean
}
export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    isLoading?: boolean
}
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    image: string
    isLoading?: boolean
}
export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
    image: string
    isLoading?: boolean
    title: string
    subtitle: string
}
