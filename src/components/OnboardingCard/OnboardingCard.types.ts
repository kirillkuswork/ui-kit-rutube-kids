import { HTMLAttributes } from 'react';

export interface OnboardingCardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    value: string;
    title: string;
    subTitle: string;
    src: string;
    isSelected?: boolean;
    isLoading?: boolean;
    htmlInputProps?: HTMLAttributes<HTMLInputElement>;
    wrapperClassName?: string;
}
