import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { Steps } from './Steps';
import { StepsProps } from './types';

const stepsCount = [3, 4, 5] satisfies StepsProps['stepsCount'][];
export default {
    title: 'Atoms/Steps',
    component: Steps,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=2929%3A185542&mode=dev',
        },
    },
    argTypes: {
        currentStep: {
            description: 'Текущий/активный шаг',
        },
        stepsCount: {
            options: stepsCount,
            control: 'radio',
            description: 'Количество отображаемых шагов',
        },
        isLoading: {
            description: 'Состояние загрузки компонента',
        },
        steps: {
            description: 'Список шагов с описанием',
        },
    },
    args: {
        currentStep: 1,
        stepsCount: 5,
        isLoading: false,
        steps: ['Возраст', 'Пол', 'Адрес', 'Работа', 'Статус'],
    },
} satisfies Meta<typeof Steps>;

export const Default: StoryFn<StepsProps> = (args) => <Steps {...args} />;
