import React from 'react';

import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { SVG } from '@/assets/icons';
import {
    Button,
    IconView,
} from '@/components';

import { Input } from './Input';
import { InputProps } from './types';

export default {
    title: 'Atoms/Input',
    component: Input,
    argTypes: {
        size: {
            description: 'Определяет высоту компонента',
        },
        isLoading: {
            description: 'Состояние загрузки в самом инпуте',
        },
        isSkeleton: {
            description: 'Состояние скелетона',
        },
        innerLabel: {
            description: 'Внутренний заголовок',
        },
        isEnabled: {
            description: 'Параметр, позволяющий управлять состоянием активности компонента',
        },
        wrapperClassName: {
            description: 'Стили для Wrapper',
        },
        inputClassName: {
            description: 'Стили для Input',
        },
        className: {
            description: 'Стили для Container',
        },
        error: {
            description: 'Определяет состояние компонента - Error',
        },
        variant: {
            description: 'Компонент обладает 2 пресетами и закрепляет за ними цвета для каждого состояния',
        },
        placeholder: {
            description: 'Плейсхолдер',
        },
        // leftHint: {
        //     description: 'Подпись с левой стороны под инпутом',
        // },
        // rightHint: {
        //     description: 'Подпись с правой стороны под инпутом',
        // },
        iconView: {
            control: false,
            description: 'IconView в левой части инпута',
        },
        rightIcon: {
            control: false,
            description: 'Иконка в правой части инпута',
        },
        rightButton: {
            control: false,
            description: 'Кнопка в правой части инпута',
        },
        inputRef: {
            table: {
                disable: true,
            },
        },
        defaultValue: {
            table: {
                disable: true,
            },
        },
        inputCallbackRef: {
            table: {
                disable: true,
            },
        },
        onPressEnter: {
            table: {
                disable: true,
            },
        },
        onClear: {
            table: {
                disable: true,
            },
        },
        focusedThenMount: {
            table: {
                disable: true,
            },
        },
        required: {
            table: {
                disable: true,
            },
        },
        activateByValue: {
            table: {
                disable: true,
            },
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=6%3A54',
        },
    },
} satisfies Meta<InputProps>;

export const Default: StoryObj<InputProps> = {
    args: {
        size: 'M',
        variant: 'Island',
        isEnabled: true,
        isLoading: false,
        isSkeleton: false,
        error: false,
        innerLabel: 'Label',
        placeholder: 'Placeholder',
        className: 'max-w-[450px]',
    },
};

export const AllStates: StoryObj<InputProps> = {
    args: {
        size: 'M',
        variant: 'Island',
        isEnabled: true,
        isLoading: false,
        isSkeleton: false,
        error: false,
        innerLabel: 'Label',
        placeholder: 'Placeholder',
        rightIcon: <SVG.DummyIcon />,
        iconView: <IconView size='XXL'
            showBgColor
            bgColor='tertiary'
            centerIcon={{ icon: <SVG.DummyIcon />, iconColor: 'primary' }}
            showCenterIcon />,
        leftValue: 'LeftValue',
        rightValue: 'RightValue',
        // leftHint: 'leftHint',
        // rightHint: 'rightHint',
        rightButton: <Button icon={<SVG.DummyIcon />} />,
        className: 'max-w-[450px]',
    },
};
