import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { ToggleButton } from './index';

export default {
    title: 'Atoms/ToggleButton',
    component: ToggleButton,
    argTypes: {
        isSelected: {
            description: 'Параметр, позволяющий управлять состоянием выделения компонента',
        },
        isDisabled: {
            description: 'Параметр, позволяющий управлять состоянием активности компонента',
        },
        isLoading: {
            description: 'Параметр, позволяющий управлять состоянием загрузки компонента',
            type: 'boolean',
        },
        label: {
            description: 'Параметр, определяющий текст Label',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=6%3A59',
        },
    },
} satisfies Meta<typeof ToggleButton>;

export const Default: StoryObj<typeof ToggleButton> = {
    args: {
        isSelected: true,
        isDisabled: false,
        isLoading: false,
        label: 'Text',
    },
};
