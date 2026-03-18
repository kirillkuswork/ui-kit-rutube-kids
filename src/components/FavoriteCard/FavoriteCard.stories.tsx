import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { FavoriteCard } from './FavoriteCard';
import bgImage from '../../assets/images/FavouriteCardBackground.png';

export default {
    title: 'Atoms/FavoriteCard',
    component: FavoriteCard,
    argTypes: {
        isSelected: {
            description: 'Определяет состояние активности элемента',
        },
        isLoading: {
            description: 'Определяет состояние загрузки элемента',
        },
        src: {
            description: 'Картинка фона',
        },
        alt: {
            description: 'Описание картинки при ее отсутствие',
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
        alt: 'картинка',
        value: 'favoriteCard',
    },
} as Meta<typeof FavoriteCard>;

export const Default: StoryFn<typeof FavoriteCard> = (args) => <FavoriteCard {...args} />;
