import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { OnboardingCard } from './OnboardingCard';
import bgImage from '../../assets/images/OnboardingCardBgIcon.png';

export default {
    title: 'Atoms/OnboardingCard',
    component: OnboardingCard,
    argTypes: {
        isSelected: {
            description: 'Определяет состояние активности элемента',
        },
        isLoading: {
            description: 'Определяет состояние загрузки элемента',
        },
        title: {
            description: 'Заголовок карточки',
        },
        subTitle: {
            description: 'Описание карточки',
        },
        src: {
            description: 'Картинка IconView',
        },
        wrapperClassName: {
            description: 'Дополнительные стили для обертки компонента',
            control: false,
        },
        className: {
            description: 'Дополнительные стили для карточки',
            control: false,
        },
        htmlInputProps: {
            control: false,
        },
        value: {
            table: {
                disable: true,
            },
        },
        name: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        isSelected: false,
        isLoading: false,
        src: bgImage,
        value: 'onboardingCard',
        title: 'Малыши от 0 до 4',
        subTitle: 'Сказки, мультфильмы, музыкальные и развивающие видео',
    },
} as Meta<typeof OnboardingCard>;

export const Default: StoryFn<typeof OnboardingCard> = (args) => <OnboardingCard {...args} />;
