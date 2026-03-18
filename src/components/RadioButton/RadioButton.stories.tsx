import { Meta } from '@storybook/react';

import { RadioButton } from './index';
import { RadioButtonPropsType } from './RadioButton';

export default {
    title: 'Atoms/RadioButton',
    component: RadioButton,
    argTypes: {
        isSelected: {
            description: 'Параметр, позволяющий управлять состоянием выделения компонента',
        },
        isEnabled: {
            description: 'Параметр, позволяющий управлять состоянием активности компонента',
        },
        label: {
            description: 'Параметр, определяющий текст Label',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=84%3A136015&mode=dev',
        },
    },
} satisfies Meta<RadioButtonPropsType>;

export const Default = {
    args: {
        isEnabled: true,
        isSelected: false,
        label: '',
    },
};
