import { ReactNode } from 'react';

export type TopMessageProps = {
    state: 'Positive' | 'Negative' | 'Neutral';
    inverse?: boolean;
    text?: string;
    subTitle?: string;
    showSubtitle?: boolean;
    leftIcon?: ReactNode;
    showIcon?: boolean;
    linkText?: string;
    showLink?: boolean;
    onClick?: () => void;
    // closeIcon?: ReactNode;
    // showClose?: boolean;
    onClose?: () => void;
    showButton?: boolean;
    buttonLabel?: string;
    duration?: number;
    className?: string;
};
