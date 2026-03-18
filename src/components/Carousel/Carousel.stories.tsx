import React from 'react';

import {
    Meta,
    StoryFn,
} from '@storybook/react';

import bgImage from '@/assets/images/BackgroundImage.png';
import { Carousel } from '@/components/Carousel/Carousel';
import { CarouselProps } from '@/components/Carousel/types';

import bgImagePreview from '../../assets/images/ProjectViewImage.png';
import { ProjectView } from '../ProjectView';

export default {
    title: 'Atoms/Carousel',
    component: Carousel,
    argTypes: {
        showDummy: {
            description: 'Параметр для сторибука, для отображения заглушек в виде компонента Dummy',
        },
        slots: {
            description: 'Определяет количество встроенных компонентов отоброжаемых в карусели. Можно установить значение для каждого брейкпойнта. Слоты могут быть 2, 3, 4 и 6',
        },
        items: {
            description: 'Элементы карусели, передаются в качестве массива',
        },
        title: {
            description: 'Заголовок карусели',
        },
        titleGroupIcon: {
            description: 'Иконка в заколовке карусели',
            control: false,
        },
        showBlockingMessage: {
            description: 'Определяет отображение, заголовок и подзаголовок заглушки',
            control: {
                type: 'object',
                field: {
                    show: { type: 'boolean' },
                    title: { type: 'string' },
                    subTitle: { type: 'string' },
                },
            },
        },
    },
    args: {
        showDummy: true,
        slots: { sm: 2, md: 3, lg: 4, xl: 6 },
        items: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        title: 'Title',
        titleGroupIcon: bgImage,
        showBlockingMessage: { show: false, title: 'Title', subTitle: 'Subtitle' },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/Web%3A-%F0%9F%9A%A7-Core-Components?node-id=3730%3A140808&mode=dev',
        },
    },
} satisfies Meta<CarouselProps>;

export const CarouselExample: StoryFn<CarouselProps> = (args) => <Carousel {...args} />;

export const CarouselExampleProjectView = {
    args: {
        showDummy: false,
        slots: { sm: 2, md: 4, lg: 4, xl: 6 },
        items: [
            <ProjectView src={bgImagePreview} key={1} />,
            <ProjectView src={bgImagePreview} key={2} />,
            <ProjectView src={bgImagePreview} key={3} />,
            <ProjectView src={bgImagePreview} key={4} />,
            <ProjectView src={bgImagePreview} key={5} />,
            <ProjectView src={bgImagePreview} key={6} />,
            <ProjectView src={bgImagePreview} key={7} />,
            <ProjectView src={bgImagePreview} key={8} />,
            <ProjectView src={bgImagePreview} key={9} />,
            <ProjectView src={bgImagePreview} key={10} />,
            <ProjectView src={bgImagePreview} key={11} />,
            <ProjectView src={bgImagePreview} key={12} />,
        ],
        title: 'Title',
        titleGroupIcon: bgImage,
        showBlockingMessage: { show: false, title: 'Title', subTitle: 'Subtitle' },
    },
} satisfies Meta<CarouselProps>;
