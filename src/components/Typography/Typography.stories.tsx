import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { Typography } from './Typography';

const defaultValue = {
    title: 'Atoms/Typography',
    component: Typography,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/7rq1VyTLZ6xWxdDqoq15bG/%E2%AC%9B-Tokens-_-Typography-Rupor?node-id=1%3A56',
        },
    },
    args: {
        color: 'primary',
        as: 'p',
        children: 'Редактируемый текст',
        inverted: false,
        fontType: 'Text',
        textType: 'Default',
        weight: 'Regular',
    },
} satisfies Meta<typeof Typography>;
export default defaultValue;

export const Controllable: StoryFn<typeof Typography> = (args) => (
    <Typography {...args} />
);
