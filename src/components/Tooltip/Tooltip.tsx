import React, {
    ReactNode,
    FC,
    useState,
} from 'react';

import {
    useFloating,
    Placement,
    useInteractions,
    useHover,
} from '@floating-ui/react';
// import { clsx } from 'clsx';

import { Underlay } from '../Underlay';

export type TooltipProps = {
    children: ReactNode
    placement?: Placement
    tooltipContent?: ReactNode
};

export const Tooltip: FC<TooltipProps> = ({
    children,
    placement,
    tooltipContent,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { refs, floatingStyles, context } = useFloating({
        placement,
        open: isOpen,
        onOpenChange: setIsOpen,
    });

    const hover = useHover(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
    ]);

    return (
        <div ref={refs.setReference}
            {...getReferenceProps()}
            style={{ zIndex: 5 }}>
            {children}
            {isOpen && (
                <div ref={refs.setFloating} style={floatingStyles}>
                    <Underlay
                        bgColor='primary'
                        borderStyle="shadow-tooltip"
                        {...getFloatingProps()}
                    >
                        {tooltipContent}
                    </Underlay>
                </div>
            )}
        </div>
    );
};
