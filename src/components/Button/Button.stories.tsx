import React from 'react';

import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { SVG } from '@/assets/icons';

import { Button } from './Button';
import { ButtonProps } from './types';

const sizes = ['L', 'M', 'S', 'XS'] satisfies ButtonProps['size'][];

const variants = [
    'Primary',
    'Secondary',
    'Outline',
    'Link',
] satisfies ButtonProps['variant'][];
export default {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=1%3A11',
        },
    },
    argTypes: {
        size: {
            options: sizes,
            control: 'radio',
            description: 'Размер кнопки',
        },
        variant: {
            options: variants,
            control: 'radio',
            description: 'Пресет кнопки',
        },
        iconPosition: {
            options: ['Left', 'Right'],
            control: 'radio',
            description: 'Позиция иконки относительно лейбла',
        },
        shape: {
            options: ['Square', 'Round'],
            control: 'radio',
            description: 'Вид закругления кнопки',
        },
        label: {
            description: 'Текст кнопки',
        },
        icon: {
            description: 'Иконка',
            control: false,
        },
        isEnabled: {
            description: 'Состояние активности кнопки',
        },
        isLoading: {
            description: 'Состояние загрузки кнопки',
        },
        isInverted: {
            description: 'Состояние инверсии кнопки, только для пресета Primary',
        },
        fullWidth: {
            description: '100% ширина кнопки',
        },
        showSkeleton: {
            description: 'Отображение скелетона',
        },
        onClick: {
            table: {
                disable: true,
            },
        },
        onClickTagHandle: {
            table: {
                disable: true,
            },
        },
        className: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
    args: {
        label: 'Title',
        variant: 'Primary',
        size: 'L',
        shape: 'Square',
        iconPosition: 'Left',
        icon: <SVG.DummyIcon />,
        isEnabled: true,
        isLoading: false,
        isInverted: false,
        fullWidth: false,
        showSkeleton: false,
    },
};

export const IconButton: StoryObj<ButtonProps> = {
    args: {
        variant: 'Primary',
        size: 'L',
        shape: 'Square',
        iconPosition: 'Left',
        icon: <SVG.DummyIcon />,
        isEnabled: true,
        isLoading: false,
        isInverted: false,
        fullWidth: false,
        showSkeleton: false,
    },
};
