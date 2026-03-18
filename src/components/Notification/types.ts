export interface NotificationProps {
    config?: {
        tension: number
        friction: number
        precision: number
    }
    duration?: number
    children: (add: AddFunction, close: CloseFunction) => void
}

export interface AddConfig {
    key?: string | number,
    duration?: number,
    state?: 'Message' | 'Error',
    title?: string,
    inverse?: boolean,
    showButton?: boolean,
    buttonLabel?: string,
    onClick?: () => void,
    className?: string,
}

export type AddFunction = (config: AddConfig) => void;
export type CloseFunction = (key: string | number) => void;

export interface NotifyItem {
    key: number | string;
    duration?: number;
    state?: 'Message' | 'Error';
    title?: string;
    inverse?: boolean;
    showButton?: boolean;
    buttonLabel: string;
    onClick?: () => void;
    className?: string;
}
