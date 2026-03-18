import React, { useState } from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { SVG } from '@/assets/icons';
import bgImage from '@/assets/images/BackgroundImage.png';
import { Button } from '@/components';
import { Dropdown } from '@/components/Dropdown';
import { DropdownItem } from '@/components/Dropdown/DropdownItem';
import {
    DropdownItemOnClickType,
    DropdownProps,
} from '@/components/Dropdown/types';
import { Popper } from '@/components/Popper';

import { DropdownItemType } from './DropdownItem/types';

export default {
    title: 'Atoms/Dropdown',
    component: Dropdown,
    argTypes: {
        isLoading: {
            description: 'Состояние загрузки',
        },
        isOpen: {
            description: 'Состояние активности компонента',
        },
        showButtonStack: {
            description: 'Отвечает за отображение компонента с кнопками ButtonStack',
        },
        showSecondButtonView: {
            description: 'Отвечает за отображение второй кнопки в ButtonStack',
        },
        bgColor: {
            description: 'Цвет фона Dropdown',
            control: 'select',
        },
        firstButton: {
            table: {
                disable: true,
            },
        },
        secondButton: {
            table: {
                disable: true,
            },
        },
        className: {
            table: {
                disable: true,
            },
        },
        options: {
            table: {
                disable: true,
            },
        },
        onClose: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        isLoading: false,
        bgColor: 'quaternary',
    },
} as Meta<DropdownProps>;

const option: DropdownItemType = {
    value: 'Value',
    title: 'Title',
    subTitle: 'Subtitle',
    leftIcon: <SVG.DummyIcon />,
    rightIcon: <SVG.DummyIcon />,
    img: bgImage,
    isItemLoading: true,
    showButton: true,
    showCheckbox: true,
    isSelected: false,
    buttonLabel: 'Title',
};

const options = Array.from({ length: 15 }, () => option);
export const DropDownWithOptions:StoryFn<DropdownProps> = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionOnClick = (params: DropdownItemOnClickType) => {
        console.log(params.event);
    };

    return <Popper
        isOpen={isOpen}
        onOutsideClick={() => setIsOpen(!isOpen)}
        autoWidth
        content={
            <Dropdown
                isOpen={isOpen}
                className='!w-[472px]'
                options={options}
                {...args}
                onClick={handleOptionOnClick}
            />
        }
    >
        <Button className='mb-5x'
            label='Open Dropdown'
            size='S'
            onClick={() => setIsOpen(!isOpen)}
        />
    </Popper>;
};

export const DropDownWithCustomOptions:StoryFn<DropdownProps> = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleAlert = () => {
        alert('Нажали на первый элемент');
    };
    const handleConsoleEvent = (params: DropdownItemOnClickType) => {
        console.log(params.event);
    };

    return <Popper
        isOpen={isOpen}
        onOutsideClick={() => setIsOpen(!isOpen)}
        autoWidth
        content={
            <Dropdown
                isOpen={isOpen}
                className='!w-[472px]'
                {...args}
            >
                <DropdownItem onClick={handleAlert}
                    title='alert'
                    value='click' />
                <DropdownItem onClick={handleConsoleEvent}
                    title='console'
                    value='click' />
            </Dropdown>
        }
    >
        <Button className='mb-5x'
            label='Open Dropdown'
            size='S'
            onClick={() => setIsOpen(!isOpen)}
        />
    </Popper>;
};
