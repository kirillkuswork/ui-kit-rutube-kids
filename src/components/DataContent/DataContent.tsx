import React, { FC } from 'react';

import clsx from 'clsx';

import { Skeleton } from '@/components/Skeleton';
import { Spacing } from '@/types';

export type DataContentType = {
    title: string
    value?: string
    subTitle?: string
    subValue?: string
    extraSubValue?: string
    extraSubtitle?: string
    topPadding?: Spacing
    bottomPadding?: Spacing
    leftPadding?: Spacing
    rightPadding?: Spacing
    className?: string
    isLoading?: boolean
};

export const DataContent:FC<DataContentType> = (props) => {
    const {
        title,
        subValue,
        value,
        subTitle,
        extraSubValue,
        extraSubtitle,
        bottomPadding,
        leftPadding,
        topPadding,
        rightPadding,
        isLoading = false,
        className = '',
    } = props;

    const showFirstLine = title || value;
    const showSecondLine = subTitle || subValue;
    const showThirdLine = extraSubtitle || extraSubValue;

    return <div className={clsx(
        leftPadding && `pl-${leftPadding}`,
        rightPadding && `pr-${rightPadding}`,
        topPadding && `pt-${topPadding}`,
        bottomPadding && `pb-${bottomPadding}`,
        'flex flex-col gap-y-1x',
        className,
    )}>
        {!isLoading ? <>
            {showFirstLine && <div className='flex justify-between'>
                <span>{title}</span>
                <span>{value}</span>
            </div>}
            {showSecondLine && <div className='flex justify-between'>
                <span>{subTitle}</span>
                <span>{subValue}</span>
            </div>}
            {showThirdLine && <div className='flex justify-between'>
                <span>{extraSubtitle}</span>
                <span>{extraSubValue}</span>
            </div>}
        </> : <>
            {showFirstLine && <Skeleton className='!h-[24px]' />}
            {showSecondLine && <Skeleton className='!h-[24px]' />}
            {showThirdLine && <Skeleton className='!h-[24px]' />}
        </>}
    </div>;
};
