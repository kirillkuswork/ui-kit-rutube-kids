import React, {
    FC,
    ReactNode,
} from 'react';

import { Meta } from '@storybook/react';

import { Grid } from './Grid';
import {
    GridColPropsType,
    GridRowPropsType,
} from './types';

const description = 'Имеет 2 пропа: span - отвечает за ширину компонента исчисляемую в колонках, offset - отвечает за расположение компонента по оси X';
export default {
    title: 'Guides/Grid/Grid Col',
    component: Grid.Col,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/Web%3A-%F0%9F%9A%A7-Core-Components?node-id=1%3A6&mode=dev',
        },
    },
    argTypes: {
        sm: { description },
        md: { description },
        lg: { description },
        xl: { description },
    },
    args: {
        sm: { span: 2, offset: 1 },
        md: { span: 6, offset: 2 },
        lg: { span: 6, offset: 2 },
        xl: { span: 6, offset: 2 },
    },
} satisfies Meta<GridColPropsType>;

const rowArgs: GridRowPropsType = {
    sm: { columns: 4 },
    md: { columns: 12 },
    lg: { columns: 12 },
    xl: { columns: 12 },
};

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => (
    <div className="flex justify-between rounded-[24px] overflow-hidden">
        <div className={'w-[16px] lg:w-[24px] bg-[#F9DFE2]'}/>
        {children}
        <div className="w-[16px] lg:w-[24px] bg-[#F9DFE2]" />
    </div>
);

export const GridCol = (args: Meta<GridRowPropsType>) => <Wrapper>
    <Grid.Container>
        <Grid.Row {...rowArgs} className='!h-[250px] relative'>
            {/* Здесь Grid.Row добавлен для отображения сетки для примера */}
            <Grid.Row {...rowArgs} className='!h-[250px] top-0 absolute'>
                {Array.from({ length: 12 }, (_, i) => (
                    <div className='bg-[#f4edfe] h-full !w-full xl:hidden' key={i} />
                ))}
            </Grid.Row>
            <Grid.Col {...args}>
                <div className='relative flex items-center justify-center border-dashed border-[1px] px-3x border-border rounded-[8px] h-full'>Col</div>
            </Grid.Col>
        </Grid.Row>
    </Grid.Container>
</Wrapper>;
