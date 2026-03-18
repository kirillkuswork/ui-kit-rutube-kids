import React from 'react';

import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { SVG } from '@/assets/icons';
import bgImage from '@/assets/images/CartoonImage.png';

import { IconView } from './IconView';
import { IconViewProps } from './types';

export default {
    title: 'Atoms/IconView',
    component: IconView,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=6%3A52&mode=dev',
        },
    },
    argTypes: {
        size: {
            description: 'Определяет размер формы на фоне',
            defaultValue: '5XL',
        },
        state: {
            description: 'Определяет состояние компонента',
        },
        showCenterIcon: {
            description: 'Определяет отображение иконки на фоне формы',
        },
        centerIcon: {
            description: 'Параметр, позволяющий изменять ресурс иконки для фона',
            control: false,
        },
        showBgImage: {
            description: 'Определяет фон со сплошным цветом',
        },
        showBgColor: {
            description: 'Определяет отображение заливки цветом на фоне формы',
        },
        shapeType: {
            description: 'Определяет форму для фона',
        },
        sideIcon: {
            description: 'Боковые иконки (параметры и своства такие же как и IconView)',
            control: {
                type: 'object',
                field: {
                    showTopIcon: { type: 'boolean' },
                    showBottomIcon: { type: 'boolean' },
                },
            },
        },
        dti: {
            table: {
                disable: true,
            },
        },
        image: {
            table: {
                disable: true,
            },
        },

    },
} satisfies Meta<typeof IconView>;

export const Default: StoryObj<IconViewProps> = {
    args: {
        size: '5XL',
        shapeType: 'SuperEllipse',
        state: 'Active',
        bgColor: 'overlay',
        showBgColor: false,
        showCenterIcon: false,
        showBgImage: false,
        sideIcon: {
            showTopIcon: true,
            topIcon: <SVG.RoundIcon width={30} height={30} />,
            topIconBgColor: 'secondary',

            showBottomIcon: true,
            bottomIcon: <SVG.RoundIcon width={30} height={30} />,
            bottomIconBgColor: 'secondary',
        },
        centerIcon: { icon: <SVG.EyeIcon />, iconColor: 'brand', colorInvertion: true },
        image: bgImage,
        isSkeleton: false,
    },
};
