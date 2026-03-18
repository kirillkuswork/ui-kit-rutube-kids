import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { Divider } from './Divider';

export default {
    title: 'Atoms/Divider',
    component: Divider,
    argTypes: {
        layout: {
            description: 'Положение Divider по осям X и Y',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=324%3A173233',
        },
    },
} satisfies Meta<typeof Divider>;

export const Horizontal: StoryObj<typeof Divider> = {
    args: {
        layout: 'horizontal',
    },
};
