import React, { FC } from 'react';

import { useActiveBreakpoint } from '@/utils/hooks/useActiveBreakpoint';

import {
    AvatarProps,
    ListItemProps,
    WrapperProps,
} from './types';
import { IconView } from '../IconView';
import { NewSkeleton } from '../NewSkeleton';
import { Typography } from '../Typography';

export const Wrapper: FC<WrapperProps> = ({ children }) => (
    <div className='flex justify-center'>
        <div className='w-full max-w-[504px] grid p-4x gap-6x md:px-0 md:py-8x md:gap-6x lg:py-11x lg:gap-11x'>
            {children}
        </div>
    </div>
);

export const IconsWrapper: FC<WrapperProps> = ({ children }) => (
    <div className='max-w-[100vw - 32px] flex justify-start items-start gap-6x mt-6x overflow-x-scroll no-scrollbar'>
        {children}
    </div>
);

export const Avatar: FC<AvatarProps> = ({ isLoading = false, image }) => {
    const { windowSize: { sm, md } } = useActiveBreakpoint();

    return (
        <div className='flex justify-center mt-4x'>
            <NewSkeleton isLoading={isLoading}>
                <IconView
                    size={sm || md ? '8XL' : '10XL'}
                    showBgImage
                    image={image}
                />
            </NewSkeleton>
        </div>
    );
};

export const InputWrapper: FC<WrapperProps> = ({ isLoading = false, children }) => (
    <div className='mt-3x'>
        <NewSkeleton isLoading={isLoading}>
            <div>
                {children}
            </div>
        </NewSkeleton>
    </div>
);

export const ButtonsWrapper: FC<WrapperProps> = ({ isLoading = false, children }) => (
    <div className='grid gap-3x grid-cols-1 md:grid-cols-2'>
        {children}
    </div>
);

export const Title: FC<WrapperProps> = ({ isLoading = false, children }) => {
    const { windowSize: { sm } } = useActiveBreakpoint();

    return (
        <NewSkeleton isLoading={isLoading}>
            <Typography
                size={sm ? 'L' : 'XL'}
                className='font-bold'
            >
                {children}
            </Typography>
        </NewSkeleton>
    );
};

export const ListWrapper: FC<WrapperProps> = ({ children }) => (
    <div className='flex justify-center'>
        <div className='w-full max-w-[536px] grid my-11x gap-4x'>
            {children}
        </div>
    </div>
);

export const ListItem: FC<ListItemProps> = ({
    image,
    title = 'Title',
    subtitle = 'Subtitle',
}) => {
    console.log(image);

    return (
        <div className='flex justify-between p-4x gap-4x'>
            <div className='flex align-center gap-4x'>
                <IconView
                    image={image}
                    showBgImage
                    size="XXL"
                />
                <div className='flex flex-col justify-center gap-1x'>
                    <Typography
                        size="S"
                        color="secondary"
                    >
                        {subtitle}
                    </Typography>
                    <div>
                        <Typography
                            size="M"
                        >
                            {title}
                        </Typography>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <img
                    src={image}
                    alt='left icon'
                    className='w-[24px] h-[24px]'
                />
            </div>
        </div>
    );
};

export const Profile = {
    Wrapper,
    IconsWrapper,
    InputWrapper,
    ButtonsWrapper,
    ListWrapper,
    Avatar,
    Title,
    ListItem,
};
