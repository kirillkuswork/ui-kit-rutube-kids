import React, { useRef } from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { Notification } from './Notification';
import {
    AddFunction,
    NotificationProps,
} from './types';
import { Button } from '../Button';

export default {
    title: 'Atoms/Notification',
    component: Notification,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=8%3A11783&mode=dev',
        },
    },
    argTypes: {
        config: {
            table: {
                disable: true,
            },
        },
        title: {
            description: 'Определяет текстовый контент компонента',
        },
        state: {
            description: 'Определяет тип сообщения',
            options: ['Message', 'Error'],
            control: { type: 'radio' },
        },
        duration: {
            description: 'Время отображения сообщения',
        },
        inverse: {
            description: 'Инверсия цвета сообщения',
        },
        showButton: {
            description: 'Определяет отображение кнопки',
        },
        buttonLabel: {
            description: 'Label кнопки',
        },
    },
    args: {
        title: 'Используя этот сайт, вы даёте своё согласие на использование файлов cookie',
        state: 'Error',
        inverse: true,
        showButton: true,
        buttonLabel: 'Title',
        duration: 5000,
    },
} satisfies Meta;

export const NotificationExample: StoryFn<NotificationProps> = (args) => {
    const ref = useRef<null | AddFunction>(null);

    const handleNotificationCall = () => {
        ref.current?.({ ...args });
    };

    return (
        <>
            <Button onClick={handleNotificationCall}
                label='Add Notification'
            />
            <Notification
                children={(add: AddFunction) => {
                    ref.current = add;
                }}
            />
        </>
    );
};

NotificationExample.parameters = {
    docs: {
        source: {
            type: 'code',
        },
    },
};
