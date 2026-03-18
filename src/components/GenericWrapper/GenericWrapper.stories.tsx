import React from 'react';

import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { GenericWrapper } from '@/components';
import { Dummy } from '@/components/Dummy';

import { GenericWrapperProps } from './types';

export default {
    title: 'Deprecated/GenericWrapper',
    component: GenericWrapper,
    argTypes: {
        alignment: {
            description: 'Определяет выравнивание AddonView относительно MainContentView',
        },
        addonSide: {
            description: 'Определяет положение AddonView',
        },
        layout: {
            description: 'Определяет положение ячеек относительно друг друга по вертикальной и горизонтальной оси',
        },
        yPaddings: {
            description: 'Определяет видимость верхнего и нижнего паддингов',
        },
        xPaddings: {
            description: 'Определяет видимость левого и правого паддингов',
        },
        gap: {
            description: 'Определяет отступ между AddonView и MainContentView',
        },
        children: {
            description: 'Является компонентом MainContentView, в который можно пробросить еще максимум один GenericWrapper',
            control: false,
        },
        wrapperClassName: {
            control: false,
        },
        addonView: {
            description: 'Является компонентом, который позиционируется вокург MainContentView',
            control: false,
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=8%3A12883',
        },
    },
} satisfies Meta<typeof GenericWrapper>;

export const Default: StoryObj<GenericWrapperProps> = {
    args: {
        gap: '4x',
        addonSide: 'start',
        alignment: 'top',
        layout: 'horizontal',
        wrapperClassName: '!max-w-[343px]',
        addonView: <Dummy className='h-[34px] w-[34px] px-3x'>1</Dummy>,
        children: <Dummy className='h-[100px]'>MainContentView</Dummy>
        ,
    },
};

export const DefaultNested : StoryObj<GenericWrapperProps> = {
    args: {
        gap: '4x',
        addonSide: 'start',
        alignment: 'top',
        layout: 'horizontal',
        wrapperClassName: 'max-w-[343px]',
        addonView: <Dummy className='h-[34px] px-3x'>1</Dummy>,
        children: <GenericWrapper
            gap='4x'
            addonSide='end'
            addonView={
                <Dummy isSecondColor className='h-[34px] px-3x'>2</Dummy>
            }
        >
            <Dummy isSecondColor className='h-[100px]'>MainContentView дочернего GenericWrapper</Dummy>
        </GenericWrapper>,
    },
};
