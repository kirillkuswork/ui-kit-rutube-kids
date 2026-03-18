import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Placement } from '@popperjs/core';
import {
    Meta,
    StoryFn,
} from '@storybook/react';
import clsx from 'clsx';

import { Button } from '@/components';
import { Popper } from '@/components/Popper';
import { PopperProps } from '@/components/Popper/types';
import { colorClassBuilder } from '@/utils';

const placement: Placement[] = [
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'bottom',
    'right',
    'left',
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
    'right-start',
    'right-end',
    'left-start',
    'left-end',
];
export default {
    title: 'Atoms/Popper',
    component: Popper,
    argTypes: {
        isOpen: {
            control: false,
            description: 'Параметр открытия/закрытия контента',
        },
        placement: {
            option: placement,
            control: 'select',
            description: 'Положение контента Popper относительно элемента с помощью которого происходит появление контента',
        },
        content: {
            control: false,
            description: 'Контент Popper',
        },
        offsetX: {
            control: 'number',
            description: 'Смещение контента по оси X',
        },
        offsetY: {
            control: 'number',
            description: 'Смещение контента по оси Y',
        },
        onOutsideClick: {
            control: false,
            description: 'Функция для закрытия Popper при нажатии вне элемента',
        },
        onOutsideMove: {
            control: false,
            description: 'Функция для закрытия Popper при отведении курсора от элемента',
        },
        autoWidth: {
            control: 'boolean',
            description: 'Параметр отвечающий за ширину контента',
        },
        style: {
            control: false,
            description: 'Дополнительные стили',
        },
        strategy: {
            control: 'radio',
            description: 'Изменение позиционирования контента',
        },
        overflowPadding: {
            table: {
                disable: true,
            },
        },
        onInit: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        placement: 'bottom-start',
        autoWidth: false,
        offsetX: 0,
        offsetY: 8,
        strategy: 'absolute',
    },
} as Meta<PopperProps>;

export const PopperExample: StoryFn<PopperProps> = (args) => {
    const [open, setOpen] = useState(false);
    const [bgColor, borderColor] = colorClassBuilder([
        {
            type: 'graphic',
            color: 'primary',
            invertion: true,
        },
        {
            type: 'graphic',
            color: 'brand',
            as: 'stroke',
        },
    ]);

    return (
        <Popper
            {...args}
            content={(
                <div
                    className={clsx(
                        'rounded-[12px] p-4x border-solid border-[1px]',
                        borderColor,
                        bgColor,
                    )}
                >
                    Popper content
                </div>
            )}
            isOpen={open}
        >
            <Button size='M'
                onClick={() => setOpen((prevOpen) => !prevOpen)}
                label='Popper'/>
        </Popper>
    );
};
