import {
    Meta,
    StoryObj,
} from '@storybook/react';

import { DataContent } from './DataContent';

export default {
    title: 'Atoms/DataContent',
    component: DataContent,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/%F0%9F%9A%A7-%F0%9F%94%A5-NEW-Web%3A-Common-Components?node-id=8%3A12957',
        },
    },
} satisfies Meta<typeof DataContent>;

export const Default: StoryObj<typeof DataContent> = {
    args: {
        title: 'title',
        value: 'value',
        subTitle: 'subtitle',
        subValue: 'subvalue',
        extraSubtitle: 'extraSubtitle',
        extraSubValue: 'extraSubValue',
        leftPadding: '2x',
        topPadding: '2x',
        rightPadding: '2x',
        bottomPadding: '2x',
        isLoading: false,
        className: 'w-[334px]',
    },
};
