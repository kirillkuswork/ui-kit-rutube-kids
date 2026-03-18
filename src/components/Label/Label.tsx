import React from 'react';

import { LabelProps } from './Label.types';
import { IconView } from '../IconView';
import { TextLabel } from '../TextLabel';

export const Label = (props: LabelProps) => {
    if (props.dataType === 'iconView') {
        const { dataType, ...iconProps } = props;

        return (
            <IconView
                {...iconProps}
            />
        );
    }

    const { dataType, children, ...textLabelProps } = props;

    return (
        <TextLabel
            {...textLabelProps}
        >
            {children}
        </TextLabel>
    );
};
