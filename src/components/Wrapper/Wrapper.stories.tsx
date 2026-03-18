import React from 'react';

import { Meta } from '@storybook/react';

import { Wrapper } from './Wrapper';
import { Dummy } from '../Dummy';

const defaultValue = {
    title: 'Atoms/Wrapper',
    component: Wrapper,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=2708%3A20515',
        },
    },
} satisfies Meta<typeof Wrapper>;
export default defaultValue;

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum ipsum felis, sed elementum lorem aliquam ut. Pellentesque ullamcorper nisl non enim placerat, vitae scelerisque magna condimentum. Cras sed nibh et metus faucibus malesuada. Quisque suscipit massa dui, vel scelerisque lorem tristique id. Nulla euismod at orci ut tristique.';

const DummyExample = ({ text }: { text: string }) => <Dummy className='w-full h-[270px]'>{text}</Dummy>;

export const WrapperExample: Meta<typeof Wrapper> = {
    args: {
        children: Array.from({ length: 5 }, (
            _,
            index,
        ) => <DummyExample text={dummyText.split('.').slice(0, index + 1).join('.')} key={index} />),
    },
};
