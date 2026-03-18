import React, { forwardRef } from 'react';

import clsx from 'clsx';

import { IconButtonProps } from './types';
import { IconView } from '../IconView';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (props, ref) => {
        const {
            className,
            size = 'XXL',
            onClick,
            shapeType = 'SuperEllipse',
            bgColor = 'quaternary',
            isEnabled = true,
            isSelected,
            showSkeleton = false,
            showCenterIcon,
            centerIcon,
            ...buttonAttrs
        } = props;

        const handleClick = () => {
            onClick?.();
        };

        const controlStateStyles = clsx(
            'control-state',
            shapeType === 'SuperEllipse' ? 'after:rounded-lg superellipse' : 'superellipse rounded-full',
            isEnabled && 'control-state-shade',
        );

        return (
            <button
                ref={ref}
                onClick={handleClick}
                type="button"
                disabled={!isEnabled}
                className={className}
                {...buttonAttrs}>
                {showSkeleton ? (
                    <IconView
                        className='cursor-default'
                        bgColor='primary'
                        size={size}
                        shapeType={shapeType}
                    />
                ) : (
                    <IconView
                        className={
                            clsx(
                                'flex items-center justify-center',
                                controlStateStyles,
                            )}
                        shapeType={shapeType}
                        size={size}
                        showBgColor={true}
                        bgColor={isEnabled ? bgColor : 'secondary'}
                        showCenterIcon={showCenterIcon}
                        centerIcon={centerIcon}
                    />
                )}
            </button>
        );
    },
);
