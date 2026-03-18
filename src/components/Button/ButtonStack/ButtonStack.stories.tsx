import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { Button } from '@/components';
import { ButtonStack } from '@/components/Button/ButtonStack';
import {
    ButtonProps,
    ButtonStackProps,
} from '@/components/Button/types';

const sizes = ['L', 'M', 'S', 'XS'] satisfies ButtonProps['size'][];
export default {
    title: 'Atoms/ButtonStack',
    component: ButtonStack,
    argTypes: {
        size: {
            options: sizes,
            control: 'radio',
            description: 'Размеры кнопки',
        },
        gap: {
            options: ['2x', '3x'],
            control: 'radio',
            description: 'Размер отступа между кнопками',
        },
        isStretched: {
            description: 'Растягивает кнопки на всю ширину',
        },
        type: {
            options: ['2Buttons', 'Button'],
            description: 'Количество отображаемых кнопок',
        },
        firstButton: {
            description: 'Превая кнопка',
            control: false,
        },
        secondButton: {
            description: 'вторая кнопка',
            control: false,
        },
        className: {
            description: 'Добполнительная стилизация компонента',
            control: false,
        },
    },
    args: {
        gap: '2x',
        size: 'L',
        type: '2Buttons',
        isStretched: false,
    },
} as Meta<ButtonStackProps>;

export const Default:StoryFn<ButtonStackProps> = (args) => <ButtonStack
    firstButton={<Button variant='Secondary' label='Title' />}
    secondButton={<Button label='Title' />}
    {...args}
/>;
