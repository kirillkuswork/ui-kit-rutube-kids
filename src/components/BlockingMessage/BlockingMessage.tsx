import React, { forwardRef } from 'react';

import clsx from 'clsx';

import { BlockingMessageProps } from './types';
import { Button } from '../Button';
import { GenericWrapper } from '../GenericWrapper';
import { IconView } from '../IconView';
import { NewSkeleton } from '../NewSkeleton';
import { Typography } from '../Typography';

export const BlockingMessage = forwardRef<HTMLButtonElement, BlockingMessageProps>(
    (props, ref) => {
        const {
            size = '11XL',
            title = 'Title Example Test Text',
            subTitle = 'Subtitle Example Test Text Long',
            orientation = 'Vertical',
            buttonLabel = '',
            bgImage,
            onClick,
            isSkeleton = false,
            className,
            ...restProps
        } = props;

        const handleClick = () => {
            onClick?.();
        };

        return (
            <>
                <div className='w-max'>
                    <GenericWrapper
                        addonSide='start'
                        alignment='center'
                        layout={orientation === 'Vertical' ? 'vertical' : 'horizontal'}
                        addonView={Boolean(bgImage) && (
                            <NewSkeleton isLoading={isSkeleton}>
                                <IconView
                                    shapeType='SuperEllipse'
                                    size={size}
                                    showBgImage
                                    image={bgImage}
                                />
                            </NewSkeleton>
                        )}
                        gap={orientation === 'Horizontal' ? '6x' : '4x'}
                        {...restProps}
                    >
                        <div className={clsx(
                            'flex flex-col justify-center',
                            'gap-y-4x',
                            orientation === 'Vertical' ? 'items-center' : '',
                            className,
                        )}>
                            <div className={clsx(
                                'flex flex-col',
                                orientation === 'Vertical' ? 'items-center' : '',
                                (isSkeleton && orientation === 'Horizontal') ? 'gap-2x' : 'gap-1x',
                            )}>
                                <NewSkeleton isLoading={isSkeleton}>
                                    <Typography
                                        fontType='Headline'
                                        size="XS"
                                        color='primary'
                                    >
                                        {title}
                                    </Typography>
                                </NewSkeleton>
                                <NewSkeleton isLoading={isSkeleton}>
                                    <Typography
                                        size="L"
                                        textType='Paragraph'
                                        color='secondary'
                                    >
                                        {subTitle}
                                    </Typography>
                                </NewSkeleton>
                            </div>
                            {/* TODO Проверить размер кнопки после правок Button */}
                            {Boolean(buttonLabel) && (
                                <Button
                                    ref={ref}
                                    onClick={handleClick}
                                    variant='Primary'
                                    size='S'
                                    label={buttonLabel}
                                    showSkeleton={isSkeleton}
                                />
                            )}
                        </div>
                    </GenericWrapper >
                </div>
            </>
        );
    },
);
