import React from 'react';

import { Typography } from '@/components';

import { TextLabelProps } from './TextLabel.types';
import { Underlay } from '../Underlay';

export const TextLabel = React.memo((props: TextLabelProps) => {
    const {
        state = 'default',
        children = '',
        as = 'p',
        topPadding = null,
        bottomPadding = null,
        leftPadding = null,
        rightPadding = null,
        inverted,
        ...typographyProps
    } = props;

    return (
        <Underlay
            cornerRadius='2x'
            topPadding={topPadding}
            bottomPadding={bottomPadding}
            leftPadding={leftPadding}
            rightPadding={rightPadding}
            enableSkeleton={state === 'skeleton'}
            bgColor='transparent'
        >
            {state === 'default' && (
                <Typography
                    inverted={inverted}
                    as={as}
                    {...typographyProps}
                >
                    {children}
                </Typography>
            )}
            {state === 'skeleton' && (
                <Typography
                    inverted={inverted}
                    as={as}
                    {...typographyProps}
                >
                    <span className='invisible'>skeleton</span>
                </Typography>
            )}
        </Underlay>
    );
});
