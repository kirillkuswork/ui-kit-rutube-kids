import React, {
    useEffect,
    FC,
} from 'react';

import clsx from 'clsx';

import { colorClassBuilder } from '@/utils';

import { BackdropProps } from './types';

const setBodyStyles = (scrollbarWidth: number) => {
    const header = document.querySelector('.RuiHeader') as HTMLElement;
    if (header) {
        const { right } = getComputedStyle(header);
        header.style.right = `calc(${scrollbarWidth}px + ${right})`;
    }
    document.body.style.width = `calc(100% - ${scrollbarWidth}px)`;
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
};

const resetBodyStyles = () => {
    const header = document.querySelector('.RuiHeader') as HTMLElement;
    if (header) {
        header.style.right = '';
    }
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.body.style.height = '';
};

export const Backdrop: FC<BackdropProps> = ({ className = '', ...props }) => {
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        setBodyStyles(scrollbarWidth);

        return () => {
            resetBodyStyles();
        };
    }, []);

    const colorClassname = colorClassBuilder({
        type: 'background',
        color: props.transparent ? 'transparent' : 'overlay',
    });

    const handleStopPropagation = (e: React.PointerEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div onPointerDownCapture={handleStopPropagation}
            className={clsx(className, 'fixed top-0 left-0 w-full h-full z-overlay', colorClassname)}
            {...props}
        />
    );
};
