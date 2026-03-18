import React from 'react';

import { StoryFn } from '@storybook/react';

import image from '@/assets/images/CartoonImage.png';

import { FeatureCard } from './FeatureCard';
import { FeatureCardProps } from './types';
import { Dummy } from '../Dummy';

export default {
    title: 'Atoms/FeatureCard',
    component: FeatureCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=739%3A21381&mode=dev',
        },
    },
    argTypes: {
        bgImage: {
            description: 'Фоновое изображение',
            control: false,
        },
    },
    args: {
        title: 'title',
        subTitle: 'title',
        bgImage: image,
        isSkeleton: false,
    },
};

export const Default: StoryFn<FeatureCardProps> = (args) => <Dummy
    className='p-6x w-max'>
    <FeatureCard {...args} />
</Dummy>;
