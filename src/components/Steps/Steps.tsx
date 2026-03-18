import React, { FC } from 'react';

import clsx from 'clsx';

import { Typography } from '@/components';
import {
    StepsProps,
    StepProps,
} from '@/components/Steps/types';
import { colorClassBuilder } from '@/utils';

import { NewSkeleton } from '../NewSkeleton';

const Step: FC<StepProps> = ({ stepNumber, isActive, title, isLoading = false }) => {
    const activeStepBgColor = colorClassBuilder({ type: 'background', color: isActive ? 'brand' : 'secondary' });

    return <div className='flex items-center gap-2x'>
        <NewSkeleton isLoading={isLoading}>
            <div className={clsx(activeStepBgColor, 'w-6x h-6x rounded-full flex items-center justify-center')}>
                <Typography
                    color={isActive ? 'primary' : 'secondary'}
                    inverted={isActive}
                    textType='Paragraph'
                    weight='Semibold'
                    size="S"
                >
                    {stepNumber}
                </Typography>
            </div>
        </NewSkeleton>
        {isActive && (
            <NewSkeleton isLoading={isLoading}>
                <div className='h-[16px]'>
                    <Typography
                        color='primary'
                        textType='Paragraph'
                        size="S"
                    >
                        {title}
                    </Typography>
                </div>
            </NewSkeleton>
        )}
    </div>;
};

export const Steps: FC<StepsProps> = ({ steps, currentStep, stepsCount, isLoading }) => {
    const displayedSteps = steps.slice(0, stepsCount);

    return (
        <div className="flex gap-x-3x">
            {displayedSteps?.map((title, index) => (
                <Step
                    key={index}
                    isLoading={isLoading}
                    stepNumber={index + 1}
                    isActive={index + 1 === currentStep}
                    title={title}
                />
            ))}
        </div>
    );
};
