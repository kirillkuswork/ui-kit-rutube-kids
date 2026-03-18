import React, {
    FC,
    ReactNode,
} from 'react';

import { Meta } from '@storybook/react';

import { Grid } from './Grid';
import { GridRowPropsType } from './types';

const description = 'Имеет 3 пропа: columns - отвечает за количество колонок в строке, items - отвечает за выравнивание дочернего компонента по оси Y, height - устанавливает высоту компонента';

export default {
    title: 'Guides/Grid/Grid Row',
    component: Grid.Row,
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
        sm: { columns: 4, items: 'start' },
        md: { columns: 12, items: 'start' },
        lg: { columns: 12, items: 'start' },
        xl: { columns: 12, items: 'start' },
    },
} satisfies Meta<GridRowPropsType>;

const colArgs = {
    sm: { span: 2, offset: 1 },
    md: { span: 6, offset: 1 },
    lg: { span: 6, offset: 1 },
    xl: { span: 6, offset: 1 },
};

// TODO Wrapper только для сторибука, в дальнейшем нужен будет Layout
const Wrapper: FC<{ children: ReactNode }> = ({ children }) => (
    <div className="flex justify-between rounded-[24px] overflow-hidden">
        <div className={'w-[16px] lg:w-[24px] bg-[#F9DFE2]'}/>
        {children}
        <div className="w-[16px] lg:w-[24px] bg-[#F9DFE2]" />
    </div>
);
export const GridRow = (args: GridRowPropsType) => <Wrapper>
    <Grid.Container>
        <Grid.Row {...args} className='!h-[250px] relative'>
            {/* Здесь Grid.Row добавлен для отображения сетки для примера */}
            <Grid.Row {...args} className='!h-[250px] top-0 absolute'>
                {Array.from({ length: 12 }, (_, i) => (
                    <div className='bg-[#f4edfe] h-full !w-full xl:hidden' key={i} />
                ))}
            </Grid.Row>
            <Grid.Col {...colArgs}>
                <div className='relative flex items-center justify-center border-dashed border-[1px] px-3x border-border rounded-[8px] h-[125px]'>Col</div>
            </Grid.Col>
        </Grid.Row>
    </Grid.Container>
</Wrapper>;
