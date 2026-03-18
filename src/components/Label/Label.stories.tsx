import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { Label } from './Label';
import IconViewStories from '../IconView/IconView.stories';
import TextLabelStories from '../TextLabel/TextLabel.stories';

const defaultValue = {
    title: 'Deprecated/Label',
    component: Label,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=361%3A195588',
        },
    },
    args: {
        dataType: 'textLabel',
        children: 'Пример текста',
        color: 'primary',
        as: 'p',
    },
    argTypes: {
        dataType: {
            description: 'Тип отображения лейбла',
        },
        ...TextLabelStories.argTypes,
        ...IconViewStories.argTypes,
    },
} satisfies Meta<typeof Label>;
export default defaultValue;

export const Controllable: StoryFn<typeof Label> = (args) => (
    <Label {...args} />
);
