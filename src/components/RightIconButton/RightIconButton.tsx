/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {
    ReactNode,
    forwardRef,
} from 'react';

import {
    Color,
    TextColor,
} from '@/types';

import { RightIconButtonProps } from './types';
import { DataContent } from '../DataContent';
import { GenericWrapper } from '../GenericWrapper';
import { IconButton } from '../IconButton';

type Size = 'XXL' | 'XL' | 'L' | 'M';

export const RightIconButton = forwardRef<HTMLButtonElement, RightIconButtonProps>(
    (props, ref) => {
        const {
            className,
            outerAlignment = 'top',
            innerAlignment = 'top',
            outerXPaddings,
            outerYPaddings,
            innerXPaddings,
            innerYPaddings,
            title,
            subtitle,
            extraSubtitle,
            value,
            subvalue,
            extraSubvalue,
            leftButtonProps,
            rightButtonProps,
            ...restProps
        } = props;

        function iconButtonConfig(
            bgColor: Color,
            centerIcon: {
                icon: ReactNode,
                iconColor: TextColor,
            },
            size: Size,
            showCenterIcon: boolean,
            isEnabled: boolean,
        ) {
            return {
                showBgColor: true,
                showBgIcon: true,
                bgColor,
                centerIcon: {
                    icon: centerIcon.icon,
                    iconColor: centerIcon.iconColor,
                },
                size,
                showCenterIcon,
                isEnabled,
            };
        }

        const leftBtn = iconButtonConfig(
            leftButtonProps.bgColor = 'primary',
            leftButtonProps.centerIcon!,
            leftButtonProps.size = 'L',
            leftButtonProps.showCenterIcon = true,
            leftButtonProps.isEnabled = true,
        );
        const rightBtn = iconButtonConfig(
            rightButtonProps.bgColor || 'transparent',
            rightButtonProps.centerIcon!,
            rightButtonProps.size || 'M',
            rightButtonProps.showCenterIcon = true,
            rightButtonProps.isEnabled = true,
        );

        return (
            // Внешний GenericWrapper
            <GenericWrapper
                wrapperClassName={className}
                addonSide='end'
                xPaddings={outerXPaddings}
                yPaddings={outerYPaddings}
                alignment={outerAlignment}
                addonView={
                    // Правый IconButton
                    <IconButton
                        ref={ref}
                        {...rightBtn}
                        {...restProps}
                    />}
            >
                {/* Внутренний GenericWrapper */}
                <GenericWrapper
                    addonSide='start'
                    xPaddings={innerXPaddings}
                    yPaddings={innerYPaddings}
                    alignment={innerAlignment}
                    addonView={
                        // Левый IconButton
                        <IconButton
                            ref={ref}
                            {...leftBtn}
                            {...restProps}
                        />
                    }
                >
                    <DataContent
                        title={title!}
                        subTitle={subtitle}
                        extraSubtitle={extraSubtitle}
                        value={value}
                        subValue={subvalue}
                        extraSubValue={extraSubvalue}
                    />
                </GenericWrapper>
            </GenericWrapper>

        );
    },
);
