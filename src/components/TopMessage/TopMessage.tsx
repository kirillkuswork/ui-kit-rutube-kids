import React, {
    forwardRef,
    useEffect,
    useState,
} from 'react';

import clsx from 'clsx';
import ReactDOM from 'react-dom';

import { colorClassBuilder } from '@/utils';

import { TopMessageProps } from './types';
import { Button } from '../Button';
import { Typography } from '../Typography';

export const TopMessage = forwardRef<HTMLDivElement, TopMessageProps>(
    (props, ref) => {
        const {
            state = 'Neutral',
            inverse,
            text,
            subTitle,
            showSubtitle,
            leftIcon,
            showIcon,
            linkText,
            showLink,
            onClick,
            // closeIcon,
            // showClose,
            onClose,
            buttonLabel = 'Title',
            showButton,
            duration,
            className,
            ...restProps
        } = props;

        const [isVisible, setIsVisible] = useState(true);
        // const [key, setKey] = useState(0);

        const handleClick = () => {
            onClick?.();
        };

        // const handleCloseClick = () => {
        //     setKey(key + 1);
        //     setIsVisible(false);
        // };

        useEffect(() => {
            // Задержка для заверешения анимации до размонтирования компонента
            if (!isVisible) {
                const animationDuration = 300;
                const timeoutId = setTimeout(() => {
                    onClose?.();
                }, animationDuration);

                return () => clearTimeout(timeoutId);
            }

            // Таймер длительности отображения TopMessage
            const setTimer = (delay: number | undefined) => {
                setTimeout(() => setIsVisible(false), delay);
            };
            setTimer(props.duration);

            return undefined;
        }, [isVisible]);

        const [
            bgPositiveColor,
            bgNegativeColor,
            bgNeutralColor,
            bgInvertedColor,
            bgTransparent,
            invertedColor,
        ] = colorClassBuilder([
            { type: 'background', color: 'positive' },
            { type: 'background', color: 'negative' },
            { type: 'background', color: 'primary' },
            { type: 'background', color: 'primary', invertion: true },
            { type: 'background', color: 'transparent' },
            { type: 'text', color: 'primary', invertion: true },
        ]);

        // Инверсия цвета фона для type === 'Negative'
        const calculateBackgroundColor = () => {
            switch (state) {
                case 'Positive':
                    return bgPositiveColor;
                case 'Negative':
                    return bgNegativeColor;
                default:
                    return inverse ? bgInvertedColor : bgNeutralColor;
            }
        };

        const isInverted = state !== 'Neutral' || inverse;

        // Инверсия цвета текста для type === 'Negative'
        const invertedTextColor = isInverted && invertedColor;

        // Центрирование текста
        const applyCenteredText = !showSubtitle && !showIcon && !showButton && !showLink;
        const applyMinWidth = showSubtitle || showButton || showLink;

        // Отображение Button || closeIcon(showClose)
        // const renderRightPart = useMemo(() => {
        //     if (showButton) {
        //         return <Button
        //             variant='Link'
        //             label={buttonLabel}
        //             className={clsx(
        //                 bgTransparent,
        //                 invertedTextColor,
        //             )}
        //             size='M'
        //             onClick={handleClick}
        //         />;
        //     }
        //     if (showClose) {
        //         return <button type='button' onClick={handleCloseClick}>
        //             <SVG.CrossIcon className={invertedTextColor || ''} />
        //         </button>;
        //     }
        //     return null;
        // }, [showButton, showClose]);

        return ReactDOM.createPortal(<div
            ref={ref}
            {...restProps}
            className={clsx(
                className,
                'fixed top-0 w-full',
                'z-notify',
                'flex justify-center p-2x',
                isVisible ? 'animate-slide-in' : 'animate-slide-out',
                calculateBackgroundColor(),
                invertedTextColor,
            )}>
            <div
                className={clsx(
                    'flex justify-center items-center',
                    applyCenteredText && '!justify-center',
                )}>
                <div className='flex items-center'>
                    {showIcon && leftIcon}
                    <div className={clsx(
                        applyMinWidth && 'min-w-[240px]',
                        'max-w-[800px] flex',
                    )}>
                        <Typography
                            inverted={isInverted}
                            size="M">
                            {text}
                        </Typography>

                        {showSubtitle && (
                            <Typography
                                inverted={isInverted}
                                textType='Paragraph'
                                size="XS">
                                {subTitle}
                            </Typography>
                        )}

                        {!showSubtitle && showLink && <a
                        >
                            <Typography
                                inverted={isInverted}
                                weight='Semibold'
                                size="M"
                                color={!isInverted ? 'link' : 'primary'}
                            >{linkText}</Typography>
                        </a>}
                    </div>
                </div>
                {showButton && <Button
                    variant='Link'
                    label={buttonLabel}
                    className={clsx(
                        bgTransparent,
                        invertedTextColor,
                    )}
                    size='M'
                    onClick={handleClick}
                />}
            </div>
        </div>, document.body);
    },
);

export default TopMessage;
