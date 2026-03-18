import React from 'react';

import { Meta } from '@storybook/react';

import { TabsGroup } from './TabsGroup';
import { TabGroupProps } from './types';

export default {
    title: 'Atoms/TabsGroup',
    component: TabsGroup,
    argTypes: {
        options: {
            description: 'Массив объектов, представляющих доступные варианты табов',
        },
        value: {
            description: 'Значение выбранного таба',
        },
        onTabChange: {
            description: 'Callback-функция, вызывается при изменении выбранного таба',
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/Web%3A-%F0%9F%9A%A7-Core-Components?node-id=8%3A12597&mode=dev',
        },
    },

} satisfies Meta<TabGroupProps>;

const options = [
    { label: 'title', value: '1' },
    { label: 'title', value: '2' },
    { label: 'title', value: '3' },
];

export const Default = () => {
    const [value, setValue] = React.useState<string>('1');

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <TabsGroup
            onTabChange={handleChange}
            value={value}
            options={options}
        />
    );
};
