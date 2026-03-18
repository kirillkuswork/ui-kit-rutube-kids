import React from 'react';

import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { SVG } from '@/assets/icons';

import { PickerButton } from './PickerButton';
import { PickerButtonProps } from './types';
import { DropdownItemType } from '../Dropdown/DropdownItem/types';

const options: DropdownItemType[] = [
    { title: 'title', value: 'mercury' },
    { title: 'title', value: 'venus' },
    { title: 'title', value: 'earth' },
    { title: 'title', value: 'mars' },
    { title: 'title', value: 'jupiter' },
    { title: 'title', value: 'earth' },
    { title: 'title', value: 'saturn' },
    { title: 'title', value: 'mercury' },
    { title: 'title', value: 'earth' },
    { title: 'title', value: 'uranus' },
];

export default {
    title: 'Deprecated/PickerButton',
    component: PickerButton,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=8%3A10211&mode=dev',
        },
    },
    argTypes: {
        addonSide: {
            description: 'Определяет положение иконки, которая указывает на возможность раскрытия действий',
        },
        dropdown: {
            description: 'Параметры для Dropdown',
        },
        offsetX: {
            description: 'Позиционирование дропдауна по оси X',
        },
        offsetY: {
            description: 'Позиционирование дропдауна по оси Y',
        },
        xPaddings: {
            description: 'Padding внутри GenericWrapper по оси X',
        },
        yPaddings: {
            description: 'Padding внутри GenericWrapper по оси Y',
        },
        addonView: {
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
} satisfies Meta<typeof PickerButton>;

export const Default: StoryObj<PickerButtonProps> = {
    args: {
        addonSide: 'start',
        title: 'title',
        isEnabled: true,
        addonView: <SVG.RoundIcon className='w-4x text-black'/>,
        xPaddings: '2x',
        yPaddings: '2x',
        isSelected: false,
        dropdown: {
            options,
            isLoading: false,
        },
        offsetX: 0,
        offsetY: 8,
    },
};
