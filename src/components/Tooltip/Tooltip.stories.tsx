import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import { Tooltip } from './Tooltip';

export default {
    title: 'Atoms/Tooltip',
    component: Tooltip,
    argTypes: {
        placement: {
            options: ['top', 'bottom', 'left', 'right'],
            control: { type: 'radio' },
        },
        tooltipContent: {
            control: { type: 'text' },
        },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=8%3A12683',
        },
    },
} satisfies Meta<typeof Tooltip>;

const BottomExample: StoryFn<typeof Tooltip> = ({ ...args }) => (
    <div className='inline-block my-[100px] mx-[50%]'>
        <Tooltip tooltipContent="example" {...args}>
            <button>Button</button>
        </Tooltip>
    </div>
);

export const Example = BottomExample.bind({});
Example.args = {
    placement: 'bottom',
};
