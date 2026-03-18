import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { Underlay } from './Underlay';

export default {
    title: 'Deprecated/Underlay',
    component: Underlay,
    argTypes: {
        cornerRadius: {
            description: 'Определяет радиус скругления углов',
        },
        children: {
            description: 'Контент',
        },
        enableSkeleton: {
            description: 'Состояние скелетона',
        },
        bgColor: {
            description: 'Цвет фона',
        },
        skeletonColor: {
            description: 'Цвет скелетона',
        },
        borderStyle: {
            description: 'Стиль обводки',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=278%3A183789',
        },
    },
    args: {
        children: 'Пример вложенности',
    },
} satisfies Meta<typeof Underlay>;

export const Primary: StoryFn<typeof Underlay> = (args) => (
    <Underlay {...args} />
);
