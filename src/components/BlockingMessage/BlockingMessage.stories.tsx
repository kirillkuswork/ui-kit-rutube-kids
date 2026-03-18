import React from 'react';

import { StoryFn } from '@storybook/react';

import image from '@/assets/images/CartoonImage.png';

import { BlockingMessage } from './BlockingMessage';
import { BlockingMessageProps } from './types';

export default {
    title: 'Atoms/BlockingMessage',
    component: BlockingMessage,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=739%3A21381&mode=dev',
        },
    },
    argTypes: {
        size: {
            description: 'Определяет размер компонента',
        },
        orientation: {
            description: 'Определяет пресет ориентации компонента',
        },
        bgImage: {
            description: 'Фоновое изображение',
            control: false,
        },
        onClick: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        size: '11XL',
        title: 'title',
        subTitle: 'subtitle',
        orientation: 'Vertical',
        buttonLabel: 'Title',
        bgImage: image,
        isSkeleton: false,
    },
};

export const Default: StoryFn<BlockingMessageProps> = (args) => <BlockingMessage {...args} />;
