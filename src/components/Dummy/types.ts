import {
    HTMLAttributes,
    ReactNode,
} from 'react';

export interface DummyProps extends HTMLAttributes<HTMLDivElement> {
    transparent?: boolean;
    isSecondColor?: boolean
    children?: ReactNode
}
