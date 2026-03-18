import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { List } from './List';

export default {
    title: 'Atoms/List',
    component: List,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=147%3A238750',
        },
    },
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['simple', 'leftIcon'],
            },
        },
        hierarchy: {
            description: 'Определяет стили в зависимости от вложенности элемента. Может быть 1 или 2',
            control: {
                type: 'select',
                options: [1, 2],
            },
        },
        enableSkeleton: {
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
        isEnabled: {
            control: {
                type: 'boolean',
            },
            defaultValue: true,
        },
        isSelected: {
            control: {
                type: 'boolean',
            },
            defaultValue: true,
        },
    },
} satisfies Meta<typeof List>;

export const Bullet: Meta<typeof List> = {
    args: {
        type: 'leftIcon',
        title: 'Title',
        subtitle: 'Subtitle',
        isEnabled: true,
        hierarchy: 1,
        isSelected: false,
        enableSkeleton: false,
    },
};

export const ListGroup:StoryFn = () => (
    <div>
        <List title='Title' />
        <List title='Title' subtitle='Subtitle' />
        <List
            title='Title'
            subtitle='Subtitle'
            type='leftIcon'
        />
        <List title='Title' hierarchy={2} />
        <List
            title='Title'
            subtitle='Subtitle'
            hierarchy={2}
            isEnabled={false}
        />
        <List
            title='Title'
            subtitle='Subtitle'
            type='leftIcon'
            hierarchy={2}
            isEnabled={false}
        />
        <List
            title='Title'
            subtitle='Subtitle'
            hierarchy={1}
            isSelected
        />
        <List
            title='Title'
            subtitle='Subtitle'
            type='leftIcon'
            hierarchy={2}
            isSelected
        />
        <List
            title='Title'
            subtitle='Subtitle'
            type='leftIcon'
            hierarchy={2}
            isEnabled={false}
            isSelected
        />
    </div>
);
