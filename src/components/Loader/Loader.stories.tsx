import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { Loader } from '.';
import { LoaderProps } from './Loader.types';

export default {
    title: 'Atoms/Loader',
    component: Loader,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=8%3A11726&mode=dev',
        },
    },
} satisfies Meta<typeof Loader>;

export const Default: StoryObj<LoaderProps> = {
    args: {
        size: 'xl',
        color: 'primary',
    },
};
