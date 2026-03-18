import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { TextLabel } from './TextLabel';

const defaultValue = {
    title: 'Deprecated/TextLabel',
    component: TextLabel,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=1%3A5',
        },
    },
    args: {
        state: 'default',
        children: 'Пример текста',
        color: 'primary',
        as: 'p',
    },
    argTypes: {
        state: {
            description: 'Состояние лейбла',
        },
        children: {
            description: 'Текст лейбла',
        },
        color: {
            description: 'Возможные цвета текста',
        },
        as: {
            description: 'Тип элемента',
        },
        topPadding: {
            description: 'Верхний паддинг',
        },
        bottomPadding: {
            description: 'Нижний паддинг',
        },
        leftPadding: {
            description: 'Левый паддинг',
        },
        rightPadding: {
            description: 'Правый паддинг',
        },
    },
} satisfies Meta<typeof TextLabel>;
export default defaultValue;

export const Controllable: StoryFn<typeof TextLabel> = (args) => (
    <TextLabel {...args} />
);
