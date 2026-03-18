import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import bgImage from '@/assets/images/CartoonImage.png';

import { Profile } from './index';
import { ProfileProps } from './types';
import { Button } from '../Button';
import { IconView } from '../IconView';
import { Input } from '../Input';
import { NewSkeleton } from '../NewSkeleton';

export default {
    title: 'Templates/Profile',
    component: Profile,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/cBPz1IhUNUor0VUOZdb9mz/%F0%9F%9F%A5-Templates?node-id=475%3A51700&mode=dev',
        },
    },
    argTypes: {
        isLoading: {
            description: 'Определяет имитацию загрузки',
        },
    },
    args: {
        isLoading: false,
    },
};

export const SampleUserProfile: StoryFn<ProfileProps> = (args) => (
    <Profile.Wrapper>
        <div className='max-w-full overflow-hidden'>
            <Profile.Title isLoading={args.isLoading || false}>
                Title
            </Profile.Title>
            <Profile.Avatar
                isLoading={args.isLoading || false}
                image={bgImage}
            />
            <Profile.IconsWrapper>
                {Array.from({ length: 6 }, (_, i) => (
                    <NewSkeleton
                        isLoading={args.isLoading || false}
                        key={i}
                    >
                        <IconView
                            image={bgImage}
                            showBgImage
                            size="3XL"
                        />
                    </NewSkeleton>
                ))}
            </Profile.IconsWrapper>
        </div>
        <div>
            <Profile.Title isLoading={args.isLoading || false}>
                Title
            </Profile.Title>
            <Profile.InputWrapper isLoading={args.isLoading || false}>
                <Input
                    placeholder='Text'
                />
            </Profile.InputWrapper>
        </div>
        <Profile.ButtonsWrapper>
            <NewSkeleton isLoading={args.isLoading || false}>
                <Button
                    label='Title'
                    variant='Secondary'
                    className='w-full'
                />
            </NewSkeleton>
            <NewSkeleton isLoading={args.isLoading || false}>
                <Button
                    label='Title'
                    className='w-full'
                />
            </NewSkeleton>
        </Profile.ButtonsWrapper>
    </Profile.Wrapper>
);

export const SampleListProfile: StoryFn<ProfileProps> = (args) => (
    <Profile.ListWrapper>
        <div>
            123
        </div>
        <div>
            {Array.from({ length: 6 }, (_, i) => (
                <Profile.ListItem
                    image={bgImage}
                    title='title'
                    subtitle='title'
                    key={i}
                />
            ))}
        </div>
        <div>
            123
        </div>
    </Profile.ListWrapper>
);
