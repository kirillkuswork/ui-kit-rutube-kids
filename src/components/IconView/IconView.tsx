import React, { forwardRef } from 'react';

import clsx from 'clsx';

import { SVG } from '@/assets/icons';
import { colorClassBuilder } from '@/utils';

import {
    activeCircleSize,
    circleBorderSize,
    circleIconSize,
    sizeStyles,
    superellipseStroke,
} from './constants';
import {
    IconViewProps,
    IconViewSize,
} from './types';
import { Skeleton } from '../Skeleton';

export const IconView = forwardRef<HTMLDivElement, IconViewProps>(
    (props, ref) => {
        const {
            size = '5XL',
            state = 'Default',
            centerIcon,
            shapeType = 'SuperEllipse',
            showCenterIcon = false,
            showBgImage = false,
            showBgColor = false,
            bgColor = 'secondary',
            image,
            sideIcon,
            isSkeleton = false,
            dti,
            // showInnerView = true,
            // initials,
            // innerViewType = 'Icon',
            // innerIconView: innerIconViewProps,
            // initialsColor = 'Secondary',
            containerClassName,
            className,
            ...restProps
        } = props;

        // let innerIconView = null;
        // if (innerIconViewProps) {
        //     innerIconView = React.cloneElement(innerIconViewProps, {
        //         className: iconSize[size],
        //     });
        // }

        const shapeStyles = {
            SuperEllipse: 'superellipse',
            CroppedTop: 'cropped-superellipse-top',
            CroppedBottom: 'cropped-superellipse-bottom',
            Circle: 'cropped-super-ellipse-both rounded-full',
            CroppedBoth: 'cropped-superellipse-both',
        };

        const [
            bgColorClassName,
            iconColorClassName,
            bgDefaultColor,
            disabledBg,
            // innerTextColor,
        ] = colorClassBuilder(
            [
                { type: 'background', color: bgColor },
                { type: 'graphic', color: centerIcon?.iconColor || 'primary', invertion: centerIcon?.colorInvertion || false, as: 'text' },
                { type: 'background', color: 'primary' },
                { type: 'background', color: 'secondary' },
                // { type: 'Text', color: 'Secondary' },
            ],
        );

        // Определяет элемент внутри - Icon || Initials (сущность innerView)
        // const innerView = showInnerView && (
        //     innerViewType === 'Icon'
        //         ? <> {innerIconView} </>
        //         : (
        //             <Typography
        //                 color={initialsColor}
        //                 variant={textStyles[size] as Font}
        //             >
        //                 {initials?.substring(0, 2).toUpperCase()}
        //             </Typography>
        //         )
        // );

        // Внутренний IconView для состояния 'Active'
        const innerActiveIconView = (isAbsolute?: boolean) => <IconView
            size={activeCircleSize[size]}
            shapeType='Circle'
            bgColor='brand'
            showBgColor
            showCenterIcon
            centerIcon={{
                icon: <SVG.CheckBoxArrowIcon width={circleIconSize[size]} />,
                iconColor: 'primary',
                colorInvertion: true,
            }}
            className={clsx(isAbsolute && 'absolute')}
        />;

        // Функция вычесления border для Skeleton
        const getCircleBorderSize = (border: IconViewSize) => {
            if (isSkeleton) {
                return 'border-none';
            }

            return (state === 'Active' && shapeType === 'Circle') ? circleBorderSize[border] : '';
        };
        const borderSize = getCircleBorderSize(size);

        return (
            <div className={clsx(
                (shapeType !== 'SuperEllipse' && shapeType !== 'Circle')
                && 'relative',
                sizeStyles[size],
                className,
            )}>
                <div
                    style={
                        showBgImage
                            ? { backgroundImage: `url(${image})` }
                            : undefined
                    }
                    className={
                        clsx(
                            'flex justify-center items-center bg-no-repeat bg-contain border-light-background-brand',
                            (!showBgImage && showBgColor && state !== 'Disabled') ? bgColorClassName : bgDefaultColor,
                            state === 'Disabled' && disabledBg,
                            shapeStyles[shapeType],
                            (state === 'Active' && shapeType === 'Circle')
                            && borderSize,
                            sizeStyles[size],
                            containerClassName,

                        )
                    }
                    {...restProps}
                    ref={ref}
                >

                    {isSkeleton && <Skeleton className={clsx(
                        'absolute',
                        'top-0 bottom-0 left-0 right-0 z-10',
                        shapeType === 'Circle' && '!rounded-full',
                    )} />}

                    {(state === 'Active' && shapeType === 'SuperEllipse') && (
                        <>
                            <SVG.SuperEllipseBorder
                                strokeWidth={superellipseStroke[size]}
                                className={clsx(
                                    'fill-light-background-brand stroke-light-background-brand !relative',

                                )} />
                            {innerActiveIconView(true)}
                        </>)
                    }

                    {(state === 'Active' && shapeType === 'Circle')
                        && innerActiveIconView()}

                    {/* Внутренняя иконка (не является сущностью innerView) */}

                    {(showCenterIcon && state !== 'Active')
                        && <div className={iconColorClassName}>{centerIcon?.icon}</div>}
                    {/* <div className={clsx('absolute', innerTextColor)} > {innerView} </div> */}
                </div >

                {/* Боковые иконки */}

                {((shapeType !== 'SuperEllipse' && shapeType !== 'Circle') && !isSkeleton)
                    && (<div className={clsx(
                        'absolute',
                        shapeType === 'CroppedTop' && 'top-0 right-0',
                        shapeType === 'CroppedBottom' && 'bottom-0 right-0',
                        shapeType === 'CroppedBoth' && 'grid grid-flow-row grid-rows-2 gap-[50px] bottom-0 right-0 ',
                    )}>
                        {
                            (shapeType === 'CroppedTop' || shapeType === 'CroppedBoth') && sideIcon?.showTopIcon
                            && <IconView
                                size='M'
                                centerIcon={{
                                    icon: sideIcon.topIcon,
                                    iconColor: 'primary',
                                }}
                                showCenterIcon
                                bgColor={sideIcon.topIconBgColor}
                                shapeType='Circle'
                                className={clsx(

                                    sideIcon.topIconClassName,
                                )} />
                        }
                        {
                            (shapeType === 'CroppedBottom' || shapeType === 'CroppedBoth') && sideIcon?.showBottomIcon
                            && <IconView
                                size='M'
                                centerIcon={{
                                    icon: sideIcon.bottomIcon,
                                    iconColor: 'primary',
                                }}
                                showCenterIcon
                                bgColor={sideIcon.topIconBgColor}
                                shapeType='Circle'
                                className={clsx(
                                    sideIcon.bottomIconClassName,
                                )} />
                        }
                    </div>)}

            </div>

        );
    },
);
