import { createContext } from 'react';

export const BaseModalCtx = createContext<{
    handleOnClose?:() => void,
    showCloseButton?: boolean
}>({
            handleOnClose: () => {},
            showCloseButton: true,
        });
