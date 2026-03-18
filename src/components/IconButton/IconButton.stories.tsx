import React from 'react';

import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { SVG } from '@/assets/icons';

import { IconButton } from './IconButton';
import { IconButtonProps } from './types';

export default {
    title: 'Deprecated/IconButton',
    component: IconButton,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/Web%3A-%F0%9F%9A%A7-Core-Components?node-id=8%3A11372&mode=dev',
        },
    },
    argTypes: {
        size: {
            description: 'Определяет размер формы на фоне',
            defaultValue: 'xl4',
        },
        centerIcon: {
            description: 'Параметр, позволяющий изменять ресурс иконки для фона',
            control: false,
        },
        showSkeleton: {
            description: 'Скелетон',
            defaultValue: false,
        },
        bgColor: {
            description: 'Цвет фона',
            defaultValue: false,
        },
        showBgColor: {
            table: {
                disable: true,
            },
        },
        onClick: {
            table: {
                disable: true,
            },
        },

    },
} satisfies Meta<typeof IconButton>;

export const Default: StoryObj<IconButtonProps> = {
    args: {
        size: 'XXL',
        shapeType: 'SuperEllipse',
        isEnabled: true,
        bgColor: 'primary',
        showCenterIcon: true,
        showSkeleton: false,
        centerIcon: {
            icon: <SVG.EyeIcon />,
            iconColor: 'transparent',
        },
    },
};
