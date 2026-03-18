import React, {
    FC,
    ReactNode,
} from 'react';

import { Meta } from '@storybook/react';

import { Grid } from './Grid';
import { GridPropsType } from './types';

export default {
    title: 'Guides/Grid',
    component: Grid.Container,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/1O1ICXujK1RSgnFSoTUbYV/Web%3A-%F0%9F%9A%A7-Core-Components?node-id=1%3A6&mode=dev',
        },
    },
    argTypes: {
        gridType: {
            options: ['3x4', '4x3', '8+4', 'default'],
            control: 'radio',
            description: 'Тип сетки. Имеет 4 значения: 3x4, 4x3, 8+4 и default по умолчанию',
        },
    },
    args: {
        gridType: 'default',
    },
} satisfies Meta<GridPropsType>;

// TODO Wrapper только для сторибука, в дальнейшем нужен будет Layout
const Wrapper: FC<{ children: ReactNode }> = ({ children }) => (
    <div className="flex justify-between rounded-[24px] overflow-hidden">
        <div className={'w-[16px] lg:w-[24px] bg-[#F9DFE2]'}/>
        {children}
        <div className="w-[16px] lg:w-[24px] bg-[#F9DFE2]" />
    </div>
);

const gridClasses = 'bg-[#f4edfe] h-[200px] w-full xl:hidden';

export const GridContainer = (args: GridPropsType) => <Wrapper>
    <Grid.Container {...args}>
        {args.gridType === 'default' && <Grid.Row sm={{ columns: 6 }} md={{ columns: 12 }}>
            {Array.from({ length: 12 }, (_, i) => (
                <div className={gridClasses} key={i}/>
            ))}
        </Grid.Row>}
        {args.gridType === '3x4' && <>
            <Grid.Row sm={{ columns: 6 }} md={{ columns: 4 }}>
                {Array.from({ length: 4 }, (_, i) => (
                    <div className={gridClasses} key={i}/>
                ))}
            </Grid.Row>
            <Grid.Row sm={{ columns: 6 }} md={{ columns: 4 }}>
                {Array.from({ length: 4 }, (_, i) => (
                    <div className={gridClasses} key={i}/>
                ))}
            </Grid.Row>
            <Grid.Row sm={{ columns: 6 }} md={{ columns: 4 }}>
                {Array.from({ length: 4 }, (_, i) => (
                    <div className={gridClasses} key={i}/>
                ))}
            </Grid.Row>
        </>
        }
        {args.gridType === '4x3' && <>
            <Grid.Row sm={{ columns: 3 }}>
                {Array.from({ length: 3 }, (_, i) => (
                    <div className={gridClasses} key={i} />
                ))}
            </Grid.Row>
            <Grid.Row sm={{ columns: 3 }}>
                {Array.from({ length: 3 }, (_, i) => (
                    <div className={gridClasses} key={i} />
                ))}
            </Grid.Row>
            <Grid.Row sm={{ columns: 3 }}>
                {Array.from({ length: 3 }, (_, i) => (
                    <div className={gridClasses} key={i} />
                ))}
            </Grid.Row>
            <Grid.Row sm={{ columns: 3 }}>
                {Array.from({ length: 3 }, (_, i) => (
                    <div className={gridClasses} key={i} />
                ))}
            </Grid.Row>
        </>}
        {args.gridType === '8+4' && <>
            <Grid.Row sm={{ columns: 6 }} lg={{ columns: 8 }}>
                {Array.from({ length: 8 }, (_, i) => (
                    <div className={gridClasses} key={i} />
                ))}
            </Grid.Row>
            <Grid.Row sm={{ columns: 6 }} lg={{ columns: 4 }}>
                {Array.from({ length: 4 }, (_, i) => (
                    <div className={gridClasses} key={i} />
                ))}
            </Grid.Row>
        </>}
    </Grid.Container>
</Wrapper>;
