import React, { FC } from 'react';

import clsx from 'clsx';

import { colorClassBuilder } from '@/utils';

import {
    NavBarProps,
    NavItemProps,
} from './types';
import navItemIcon from '../../assets/images/navbar/NavItemIcon.png';
import navItemShapeIcon from '../../assets/images/navbar/ShapeIcon.png';
import { NewSkeleton } from '../NewSkeleton';
import { Typography } from '../Typography';

export const Item: FC<NavItemProps> = (props) => {
    const {
        title = 'Title',
        isActive = false,
        isLoading = false,
        icon = navItemIcon,
        shapeIcon = navItemShapeIcon,
    } = props;

    const [
        activeText,
        disabledText,
    ] = colorClassBuilder([
        { type: 'text', color: 'primary' },
        { type: 'text', color: 'secondary' },
    ]);

    return (
        <div className='grid gap-2x cursor-pointer pt-3x pb-1x shrink-0'>
            <div className='relative flex justify-center mx-4x md:mx-5x'>
                <NewSkeleton isLoading={isLoading}>
                    <img
                        src={icon}
                        alt={`rubricator item image ${title}`}
                        className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] relative z-10"
                    />
                </NewSkeleton>
                {isActive && !isLoading && (
                    <img
                        src={shapeIcon}
                        alt={`rubricator item image ${title}`}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5 max-w-none scale-[0.77] md:scale-[1]"
                    />
                )}
            </div>
            <NewSkeleton isLoading={isLoading}>
                <Typography
                    size="S"
                    className={clsx(
                        'text-center relative z-10',
                        isActive ? activeText : disabledText,
                    )}
                >
                    {title}
                </Typography>
            </NewSkeleton>
        </div>
    );
};

export const Bar: FC<NavBarProps> = ({ children }) => (
    <div className='flex justify-start md:justify-center items-start overflow-x-scroll px-4x pb-4x gap-3x md:gap-4x no-scrollbar'>
        {children}
    </div>
);

export const NavBar = {
    Item,
    Bar,
};
