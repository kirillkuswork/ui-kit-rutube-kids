import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { CheckboxButton } from './index';

export default {
    title: 'Atoms/CheckboxButton',
    component: CheckboxButton,
    argTypes: {
        className: {
            description: 'Дополнительные стили',
            control: false,
        },
        onChange: {
            description: 'Событие, которое происходит при изменении состояния чекбокса',
        },
        isSelected: {
            description: 'Параметр для переключения состояния CheckboxButton. Используется только для сторибука',
        },
        isDisabled: {
            description: 'Параметр, позволяющий управлять состоянием активности компонента',
        },
        label: {
            description: 'Параметр, определяющий текст Label',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=6%3A61',
        },
    },
} satisfies Meta<typeof CheckboxButton>;

export const CheckboxExample: StoryObj<typeof CheckboxButton> = {
    args: {
        isDisabled: false,
        isSelected: false,
        label: '',
    },
};
