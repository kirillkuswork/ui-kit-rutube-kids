import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import {
    Button,
    Input,
    Typography,
} from '@/components';

import { NewSkeleton } from './NewSkeleton';
import { NewSkeletonProps } from './types';

export default {
    title: 'Atoms/NewSkeleton',
    component: NewSkeleton,
    argTypes: {
        isLoading: {
            description: 'Состояние загрузки',
        },
    },
    args: {
        isLoading: false,
    },
} satisfies Meta<typeof NewSkeleton>;

export const Default: StoryFn<NewSkeletonProps> = (args) => (
    <div className='flex flex-col gap-3x'>
        {/* здесь прокидываем компонент чилдами,
        но вообще нужно просто сам компонент изнутри обернуть скелетоном,
        здесь просто для примера */}
        <NewSkeleton {...args}>
            <Button label='Button'/>
        </NewSkeleton>
        <NewSkeleton {...args}>
            <Input size='S'
                className='max-w-[400px]'
                placeholder='placeholder'/>
        </NewSkeleton>
        <NewSkeleton {...args}>
            <Typography size='M'>Label Example</Typography>
        </NewSkeleton>
        <NewSkeleton {...args}><Button label='Long Button Example'/></NewSkeleton>
    </div>

);
