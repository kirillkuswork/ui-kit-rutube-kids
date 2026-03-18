import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { Skeleton } from './Skeleton';
import { SkeletonProps } from './types';

export default {
    title: 'Atoms/Skeleton',
    component: Skeleton,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=2%3A54&mode=dev',
        },
    },
    argTypes: {
        shape: {
            description: 'Форма скелетона',
        },
    },
    args: {
        shape: 'Rectangle',
        className: '',

    },
} satisfies Meta<typeof Skeleton>;

export const Default: StoryFn<SkeletonProps> = (args) => (
    <div className='w-[283px] h-[27px]'>
        <Skeleton {...args} />
    </div>

);
