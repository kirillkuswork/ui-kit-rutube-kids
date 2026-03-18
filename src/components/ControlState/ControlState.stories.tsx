import React from 'react';

import clsx from 'clsx';

import { colorClassBuilder } from '@/utils';

const defaultValue = {
    title: 'Guides/ControlState',
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=14%3A12921',
        },
    },
};
export default defaultValue;

const [bgColor, bgColorDisabled] = colorClassBuilder([
    {
        type: 'background',
        color: 'brand',
    },
    {
        type: 'background',
        color: 'brand',
        prefix: 'disabled',
        postfix: 'disabled',
    },
]);

const lightButton = {
    sizeClassName: 'w-[150px] h-[30px] rounded',
};
const darkButton = {
    sizeClassName: 'w-[150px] h-[30px] rounded',
};

export const Samples = () => (
    <div className='flex flex-col gap-4'>
        <div>
            Затемнение (Shade):
            <button
                className={clsx(
                    bgColor,
                    lightButton.sizeClassName,
                    'control-state-shade after:rounded', // обязательно скруглить, если есть бордер
                    'mx-4x',
                )}>
                Наведи/нажми
            </button>
            <button
                className={clsx(
                    bgColorDisabled,
                    lightButton.sizeClassName, // control-state просто не применяется к disabled
                )}
                disabled
            >
                Disabled
            </button>
        </div>
        <div>
            Осветление (Tint):
            <button
                className={clsx(
                    bgColor,
                    darkButton.sizeClassName,
                    'mx-4x',
                    'control-state-tint after:rounded', // обязательно скруглить, если есть бордер
                )}>
                Наведи/нажми
            </button>
            <button
                className={clsx(
                    bgColorDisabled,
                    darkButton.sizeClassName, // control-state просто не применяется к disabled
                )}
                disabled
            >
                Disabled
            </button>
        </div>
    </div>
);
