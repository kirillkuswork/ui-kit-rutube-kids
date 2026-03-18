import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { CodeInput } from './CodeInput';
import { CodeInputProps } from './types';

export default {
    title: 'Atoms/CodeInput',
    component: CodeInput,
    argTypes: {
        error: {
            description: 'Ошибка ввода',
        },
        errorMsg: {
            description: 'Сообщение с ошибкой',
        },
        variant: {
            description: 'Компонент обладает 2 пресетами и закрепляет за ними цвета для каждого состояния',
        },
        onChange: {
            table: {
                disable: true,
            },
        },
        inputProps: {
            table: {
                disable: true,
            },
        },
    },
} satisfies Meta<CodeInputProps>;

export const Default: StoryObj<CodeInputProps> = {
    args: {
        error: false,
        errorMsg: 'Неверный код',
        variant: 'Island',
    },
};
