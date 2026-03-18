import React, { FC } from 'react';

import clsx from 'clsx';

import { colorClassBuilder } from '@/utils';
import { useActiveBreakpoint } from '@/utils/hooks/useActiveBreakpoint';

import { FeatureCardProps } from './types';
import { IconView } from '../IconView';
import { Skeleton } from '../Skeleton';
import { Typography } from '../Typography';

export const FeatureCard: FC<FeatureCardProps> = (props) => {
    const {
        title,
        subTitle,
        bgImage,
        isSkeleton = false,
        className,
    } = props;

    const { windowSize: { sm, md, lg, xl } } = useActiveBreakpoint();

    const bgColorClassName = colorClassBuilder({
        type: 'background',
        color: 'quaternary',
    });

    const mainContainerSizes = clsx(
        'xl:h-[402px] xl:w-[252px] xl:gap-auto xl:flex-col xl:p-6x',
        'lg:h-[189px] lg:w-[432px] lg:gap-12x lg:flex-row lg:p-6x',
        'md:h-[189px] md:w-[312px] md:gap-8x md:flex-row md:p-4x',
        'sm:h-[130px] sm:w-[358px] sm:gap-6x sm:flex-row sm:p-4x',
    );

    const imageSize = (xl && '5XL') || (lg && '4XL') || ((md || sm) && '3XL') || undefined;

    const renderTextContent = () => {
        if (isSkeleton) {
            return (
                <>
                    <Skeleton
                        className={clsx(
                            '!h-[30px] pb-',
                            xl && 'mb-8x !w-[154px]',
                            lg && 'mb-2x !w-[200px]',
                            md && 'mb-2x !w-[160px]',
                            sm && 'mb-2x !w-[196px]',
                        )}
                    />
                    <Skeleton
                        className={clsx(
                            '!h-[20px]',
                            (xl || md) && '!w-[184px]',
                            lg && '!w-[256px]',
                            sm && '!w-[238px]',
                        )}
                    />
                    <Skeleton
                        className={clsx(
                            '!h-[20px]',
                            xl && '!w-[124px]',
                            lg && '!w-[170px]',
                            md && '!w-[136px]',
                            sm && '!w-[168px]',
                        )}
                    />
                </>
            );
        }

        return (
            <>
                <Typography
                    fontType='Headline'
                    size="S"
                    color="primary">
                    {title}
                </Typography>
                <Typography
                    textType='Paragraph'
                    size='M'
                    color="secondary">
                    {subTitle}
                </Typography>
            </>
        );
    };

    const renderImageContent = () => {
        if (isSkeleton) {
            return (
                <Skeleton
                    className='xl:!w-[96px] lg:!w-[80px] xl:!h-[96px] lg:!h-[80px] !w-[64px] !h-[64px]xl:self-end'
                    shape='Circle'
                />
            );
        }

        return (
            <IconView
                className={clsx(xl && 'self-end')}
                size={imageSize}
                image={bgImage}
            />
        );
    };

    return (
        <div className={clsx(
            'flex rounded-6x justify-between',
            mainContainerSizes,
            bgColorClassName,
            className,
        )}>
            <div className={clsx(
                'flex flex-col items-start',
                !sm ? 'gap-2x' : 'gap-1x',
            )}>
                {renderTextContent()}
            </div>
            {renderImageContent()}
        </div>
    );
};
