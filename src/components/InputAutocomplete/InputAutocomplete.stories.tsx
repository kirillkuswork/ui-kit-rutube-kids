import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { DropdownItemType } from '@/components/Dropdown/DropdownItem/types';
import { InputAutocomplete } from '@/components/InputAutocomplete';
import { InputAutocompleteProps } from '@/components/InputAutocomplete/types';

const options: DropdownItemType[] = [
    { title: 'title', value: 'mercury' },
    { title: 'title', value: 'venus' },
    { title: 'title', value: 'earth' },
    { title: 'title', value: 'mars' },
    { title: 'title', value: 'jupiter' },
    { title: 'title', value: 'earth' },
    { title: 'title', value: 'saturn' },
    { title: 'title', value: 'mercury' },
    { title: 'title', value: 'earth' },
    { title: 'title', value: 'uranus' },
];

export default {
    title: 'Atoms/InputAutocomplete',
    component: InputAutocomplete,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/Web%3A-%F0%9F%9A%A7-Core-Components?node-id=3657%3A128833&mode=dev',
        },
    },
    argTypes: {
        variant: {
            description: 'Компонент обладает 2 пресетами и закрепляет за ними цвета для каждого состояния',
        },
        dropdown: {
            description: 'Параметры для Dropdown',
        },
        isOpenDropdown: {
            table: {
                disable: true,
            },
        },
        className: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        variant: 'Island',
        className: 'w-[472px]',
        isMobileSearchOpen: false,
        dropdown: {
            options,
            isLoading: false,
        },
    },
} as Meta<InputAutocompleteProps>;

// eslint-disable-next-line max-len
export const InputAutocompleteExample:StoryFn<InputAutocompleteProps> = (args) => <InputAutocomplete {...args} />;
