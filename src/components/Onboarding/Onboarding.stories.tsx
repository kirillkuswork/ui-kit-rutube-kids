import React from 'react';

import favouriteCardBg from '../../assets/images/onboarding/FavouriteCardBackground.png';
import featureCardIcon from '../../assets/images/onboarding/FeatureCardIcon.png';
import { FavoriteCard } from '../FavoriteCard';
import { FeatureCard } from '../FeatureCard';
import { OnboardingCard } from '../OnboardingCard';

const defaultValue = {
    title: 'Templates/Onboarding',
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/cBPz1IhUNUor0VUOZdb9mz/%F0%9F%9F%A5-Templates?node-id=584%3A87577&mode=dev',
        },
    },
};
export default defaultValue;

export const SampleOnboardingCards = () => (
    <div className='w-full flex gap-6x justify-center items-center flex-col md:flex-row'>
        {Array.from({ length: 3 }, (_, i) => (
            <OnboardingCard
                name='Test'
                value='Test'
                title='Малыши от 0 до 4'
                subTitle='Сказки, мультфильмы, музыкальные и развивающие видео'
                src={`/src/assets/images/onboarding/OnboardingCardIcon_${i + 1}.png`}
                key={i}
            />
        ))}
    </div>
);

export const SampleFavoriteCards = () => (
    <div className='w-full flex justify-center'>
        <div className='inline-grid gap-6x grid-cols-1 md:grid-cols-2'>
            {Array.from({ length: 6 }, (_, i) => (
                <FavoriteCard
                    name='Test'
                    value='Test'
                    src={favouriteCardBg}
                    key={i}
                />
            ))}
        </div>
    </div>
);

export const SampleFeatureCards = () => (
    <div className='w-full flex justify-center'>
        <div className='inline-grid gap-6x md:grid-cols-2 xl:flex'>
            {Array.from({ length: 4 }, (_, i) => (
                <FeatureCard
                    title='Title'
                    subTitle='Subtitle'
                    bgImage={featureCardIcon}
                    key={i}
                />
            ))}
        </div>
    </div>
);

export const SampleOnboardingCardsSkeleton = () => (
    <div className='w-full flex gap-6x justify-center items-center flex-col md:flex-row'>
        {Array.from({ length: 3 }, (_, i) => (
            <OnboardingCard
                name='Test'
                value='Test'
                title='Малыши от 0 до 4'
                subTitle='Сказки, мультфильмы, музыкальные и развивающие видео'
                src={`/src/assets/images/onboarding/OnboardingCardIcon_${i + 1}.png`}
                isLoading
                key={i}
            />
        ))}
    </div>
);

export const SampleFavoriteCardsSkeleton = () => (
    <div className='w-full flex justify-center'>
        <div className='inline-grid gap-6x grid-cols-1 md:grid-cols-2'>
            {Array.from({ length: 6 }, (_, i) => (
                <FavoriteCard
                    name='Test'
                    value='Test'
                    src={favouriteCardBg}
                    isLoading
                    key={i}
                />
            ))}
        </div>
    </div>
);

export const SampleFeatureCardsSkeleton = () => (
    <div className='w-full flex justify-center'>
        <div className='inline-grid gap-6x md:grid-cols-2 xl:flex'>
            {Array.from({ length: 4 }, (_, i) => (
                <FeatureCard
                    title='Title'
                    subTitle='Subtitle'
                    bgImage={featureCardIcon}
                    isSkeleton
                    key={i}
                />
            ))}
        </div>
    </div>
);
