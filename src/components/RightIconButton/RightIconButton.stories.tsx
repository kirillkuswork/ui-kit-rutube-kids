import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { SVG } from '@/assets/icons';

import { RightIconButton } from './RightIconButton';
import { RightIconButtonProps } from './types';

const table = {
    disable: true,
};

export default {
    title: 'Deprecated/RightIconButton',
    component: RightIconButton,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=105%3A136128&mode=dev',
        },
    },
    argTypes: {
        outerXPaddings: {
            description: 'Отступы внешнего GenericWrapper по оси X',
        },
        outerYPaddings: {
            description: 'Отступы внешнего GenericWrapper по оси Y',
        },
        innerXPaddings: {
            description: 'Отступы внутреннего GenericWrapper по оси X',
        },
        innerYPaddings: {
            description: 'Отступы внутреннего GenericWrapper по оси Y',
        },

        innerAlignment: {
            description: 'Расположение левой кнопки',
        },
        outerAlignment: {
            description: 'Расположение правой кнопки',
        },
        onClick: {
            table,
        },
        showCenterIcon: {
            table,
        },
        centerIcon: {
            table,
        },
        showBgColor: {
            table,
        },
        isSelected: {
            table,
        },
        size: {
            table,
        },
        shapeType: {
            table,
        },
        bgColor: {
            table,
        },
    },
    args: {
        outerXPaddings: '4x',
        outerYPaddings: '4x',
        innerXPaddings: '4x',
        innerYPaddings: '4x',
        outerAlignment: 'top',
        innerAlignment: 'top',
        title: 'title',
        subtitle: 'subtitle',
        extraSubtitle: 'extraSubtitle',
        value: 'value',
        subvalue: 'subvalue',
        extraSubvalue: 'extraSubvalue',
        className: 'w-[390px]',
        leftButtonProps: {
            bgColor: 'primary',
            size: 'L',
            showCenterIcon: true,
            centerIcon: {
                icon: < SVG.RoundIcon width={20} />,
                iconColor: 'primary',
            },
            isEnabled: true,
        },
        rightButtonProps: {
            bgColor: 'transparent',
            size: 'L',
            showCenterIcon: true,
            centerIcon: {
                icon: <SVG.ArrowIcon className='rotate-180 ' width={20} />,
                iconColor: 'primary',
            },
            isEnabled: true,
        },
    },
} satisfies Meta<typeof RightIconButton>;

export const Default: StoryFn<RightIconButtonProps> = (args) => <RightIconButton {...args} />;
