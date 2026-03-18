import { Meta } from '@storybook/react';

import { ProjectView } from './index';
import { ProjectViewPropsType } from './ProjectView';
import bgImage from '../../assets/images/ProjectViewImage.png';

export default {
    title: 'Atoms/ProjectView',
    component: ProjectView,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/z9qsD48bD0e1LsIlYv9yMJ/%F0%9F%9F%A5-Core-Components?node-id=2256%3A2899&mode=dev',
        },
    },
    argTypes: {
        isLoading: {
            description: 'Параметр, отвечающий за состояние загрузки',
        },
    },
} satisfies Meta<ProjectViewPropsType>;

export const Default = {
    args: {
        isLoading: false,
        src: bgImage,
    },
};
