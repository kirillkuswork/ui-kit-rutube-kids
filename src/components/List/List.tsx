import React, { FC } from 'react';

import clsx from 'clsx';

import CircleIcon from '@/assets/icons/CircleIcon';

import { NewSkeleton } from '../NewSkeleton';
import { Typography } from '../Typography';

export type ListProps = {
    type?: 'simple' | 'leftIcon' | undefined
    title: string
    subtitle?: string | undefined
    enableSkeleton?: boolean | undefined
    isEnabled?: boolean
    hierarchy?: 1 | 2
    isSelected?: boolean
};

export const List: FC<ListProps> = ({
    type = 'simple',
    title,
    subtitle,
    enableSkeleton = false,
    isEnabled = true,
    hierarchy = 1,
    isSelected = false,
}) => (
    <NewSkeleton isLoading={enableSkeleton}>
        <div className={clsx(
            'flex items-center w-full',
            isEnabled && 'control-state-shade',
            subtitle ? 'p-[8px]' : 'px-[8px] py-[12px]',
            hierarchy === 2 && '!pl-[24px]',
        )}>
            <div className={clsx(
                'flex items-center w-full',
                isSelected && 'mr-[10px]',
            )}>
                {type === 'leftIcon' && (
                    <div className='mr-[10px]'>
                        <CircleIcon />
                    </div>
                )}
                <div>
                    <Typography
                        size="M"
                        color={isEnabled ? 'primary' : 'tertiary'}
                    >
                        {title}
                    </Typography>
                    {Boolean(subtitle) && (
                        <div className='mt-[2px]'>
                            <Typography
                                size="XS"
                                color={isEnabled ? 'secondary' : 'tertiary'}
                            >
                                {subtitle}
                            </Typography>
                        </div>
                    )}
                </div>
            </div>
            {isSelected && (
                <div className='ml-auto'>
                    <CircleIcon />
                </div>
            )}
        </div>
    </NewSkeleton>
);
