import { ReactNode } from 'react';

import { Breakpoints } from '@/components/Grid/types';
import { IconButtonProps } from '@/components/IconButton/types';

export type SlotsAmountType = 2 | 3 | 4 | 6;

export type ShowBlockingMessageType = {
    show: boolean
    title: string
    subTitle: string
};

export type CarouselProps = {
    items: ReactNode[];
    slots: {
        [key in Breakpoints]: SlotsAmountType
    }
    showDummy?: boolean
    title: string
    titleGroupIcon?: string
    showBlockingMessage?: ShowBlockingMessageType,
} & Pick<IconButtonProps, 'onClick'>;
