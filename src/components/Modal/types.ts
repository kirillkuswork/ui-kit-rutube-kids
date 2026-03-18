import { HTMLAttributes } from 'react';

import { BackdropProps } from '@/components/Backdrop/types';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    ariaLabelledby?: string;
    onClose?: () => void;
    /**
  * @param onClosed - срабатывает, если есть анимация, после ее окончания перед размонтированием
  */
    onClosed?: () => void;
    backdropProps?: BackdropProps;
    top?: boolean;
    alignRight?: boolean;
    anchor?: HTMLElement | null;
}
