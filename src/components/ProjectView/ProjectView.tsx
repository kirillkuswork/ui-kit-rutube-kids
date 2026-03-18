import React, { forwardRef } from 'react';

import clsx from 'clsx';

import { NewSkeleton } from '../NewSkeleton';

export type ProjectViewPropsType = {
    src: string;
    alt?: string;
    className?: string;
    isLoading?: boolean;
};

export const ProjectView = forwardRef<HTMLDivElement, ProjectViewPropsType>(
    (props, ref) => {
        const {
            src,
            alt = '',
            className,
            isLoading = false,
        } = props;

        const commonClasses = 'w-full h-full relative overflow-hidden rounded-2x cursor-pointer';
        const sizesClasses = 'min-w-[127px] min-h-[178px] max-w-[158px] max-h-[221px] sm:w-[127px] sm:h-[178px] md:w-[158px] md:h-[221px] lg:w-[134.67px] lg:h-[187.94px] xl:w-[152px] xl:h-[212px]';

        return (
            <NewSkeleton isLoading={isLoading}>
                <div
                    ref={ref}
                    className={clsx(
                        className,
                        commonClasses,
                        sizesClasses,
                    )}
                >
                    <img
                        className="object-cover"
                        src={src}
                        alt={alt}
                    />
                </div>
            </NewSkeleton>
        );
    },
);
