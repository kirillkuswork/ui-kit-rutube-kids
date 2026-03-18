import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { ProgressBar } from './ProgressBar';
import { ProgressBarProps } from './types';

export default {
    title: 'Atoms/Progress Bar',
    component: ProgressBar,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=882%3A291360&mode=dev',
        },
    },
    argTypes: {
        value: {
            description: 'Значение заполнения шкалы ProgressBar',
            control: { type: 'range', min: 0, max: 100, step: 1 },
        },
        color: {
            description: 'Цвет индикатора шкалы ProgressBar',
        },
        size: {
            description: 'Размер',
        },
        showBackground: {
            description: 'Отображение фона',
        },
        showSkeleton: {
            description: 'Отображение скелетона',
        },

    },
    args: {
        color: 'secondary',
        value: 50,
        size: 'M',
        showBackground: true,
        showSkeleton: false,
    },
} satisfies Meta<typeof ProgressBar>;

export const Default: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;
