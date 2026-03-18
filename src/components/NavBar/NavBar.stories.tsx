import React from 'react';

import { StoryFn } from '@storybook/react';

import { NavBar } from './NavBar';
import { NavItemProps } from './types';

export default {
    title: 'Templates/NavBar',
    component: NavBar,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/cBPz1IhUNUor0VUOZdb9mz/%F0%9F%9F%A5-Templates?node-id=454%3A86869&mode=dev',
        },
    },
    argTypes: {
        isActive: {
            description: 'Определяет имитацию активности элемента',
        },
        isLoading: {
            description: 'Определяет имитацию загрузки',
        },
    },
    args: {
        isActive: false,
        isLoading: false,
    },
};

const titles = ['Главная', 'Каналы', 'Коллекции', 'ТВ-эфиры', 'Подписки', 'История'];

export const NavBarSample:StoryFn<NavItemProps> = (args) => (
    <NavBar.Bar>
        {Array.from({ length: 6 }, (_, i) => (
            <NavBar.Item
                title={titles[i] || 'Title'}
                isLoading={args.isLoading}
                isActive={args.isActive}
                icon={`/src/assets/images/navbar/NavItemIcon_${i + 1}.png`}
                shapeIcon={`/src/assets/images/navbar/ShapeIcon_${i + 1}.png`}
                key={i}
            />
        ))}
    </NavBar.Bar>
);
