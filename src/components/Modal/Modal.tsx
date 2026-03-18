import React, {
    FC,
    useCallback,
    useEffect,
} from 'react';

import clsx from 'clsx';
import { createPortal } from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import FocusLock from 'react-focus-lock';

import { ModalProps } from './types';
import { Backdrop } from '../Backdrop';

export const Modal: FC<ModalProps> = (props) => {
    const {
        open,
        children,
        ariaLabelledby,
        backdropProps,
        alignRight,
        onClose: handleOnClose,
        ...htmlDivProps
    } = props;

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape' && open) {
            handleOnClose?.();
        }
    }, [open]);

    useEffect(() => {
        if (open) {
            document.addEventListener('keydown', onKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open, onKeyDown]);

    let align: string;

    switch (true) {
        case alignRight: {
            align = 'right-0';
            break;
        }
        default: {
            align = '-translate-x-[50%] left-[50%]';
            break;
        }
    }

    const modal = (
        <>
            <Backdrop
                className="!z-modal-overlay"
                onClick={handleOnClose}
                {...backdropProps}
            />
            <FocusLock returnFocus>
                <div
                    className={clsx('fixed outline-none -translate-y-[50%] top-[50%] z-modal', align)}
                    aria-modal
                    aria-labelledby={ariaLabelledby}
                    tabIndex={-1}
                    role="dialog"
                    {...htmlDivProps}
                >
                    {children}
                </div>
            </FocusLock>
        </>
    );

    return open ? createPortal(modal, document.body) : null;
};
