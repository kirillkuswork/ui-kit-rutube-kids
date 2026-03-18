import React, { useState } from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { SVG } from '@/assets/icons';

import { TopMessage } from './TopMessage';
import { TopMessageProps } from './types';
import { Button } from '../Button';

export default {
    title: 'Atoms/TopMessage',
    component: TopMessage,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=2304%3A204891&mode=dev',
        },
    },
    argTypes: {
        state: {
            description: 'Определяет тип сообщения',
        },
        text: {
            description: 'Определяет контент основновного текстового слоя',
        },
        subTitle: {
            description: 'Определяет контент subtitle',
        },
        showSubtitle: {
            description: 'Определяет видимость subtitle',
        },
        duration: {
            description: 'Определяет длительность отображения TopMessage',
        },
        inverse: {
            description: 'Меняет цветовой стиль для разных тем',
        },
        leftIcon: {
            description: 'Параметр, позволяющий изменять ресурс иконки слева',
            control: false,
        },
        showIcon: {
            description: 'Отображение иконки слева',
        },
        linkText: {
            description: 'Текст ссылки',
        },
        showLink: {
            description: 'Определяет видимость ссылки вместо subtitle',
        },
        // showClose: {
        //     description: 'Отображение иконки для закрытия компонента,
        // отображается только при !showButton',
        // },
        buttonLabel: {
            description: 'Надпись на кнопке',
        },
        showButton: {
            description: 'Показ кнопки справа, отображается только при !closable',
        },
        onClose: {
            table: {
                disable: true,
            },
        },
        onClick: {
            table: {
                disable: true,
            },
        },
        // closeIcon: {
        //     table: {
        //         disable: true,
        //     },
        // },
    },
    args: {
        state: 'Negative',
        text: 'Top Message',
        duration: 5000,
        showSubtitle: false,
        subTitle: 'Subtitle',
        inverse: false,
        showButton: false,
        // showClose: false,
        leftIcon: <SVG.RoundIcon width={24} height={24} />,
        showIcon: false,
        showLink: false,
        buttonLabel: 'Title',
        linkText: 'Link',
        className: '',
    },
} satisfies Meta<typeof TopMessage>;

export const Default: StoryFn<TopMessageProps> = (args) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleOpenClick = () => {
        setIsVisible(true);
    };

    return (
        <>
            <Button
                variant='Secondary'
                label='Open Top Message'
                onClick={handleOpenClick}
            />
            {isVisible && (
                <TopMessage
                    {...args}
                    onClose={() => {
                        setIsVisible(false);
                    }}
                />
            )}
        </>
    );
};

Default.parameters = {
    docs: {
        source: {
            type: 'code',
        },
    },
};
