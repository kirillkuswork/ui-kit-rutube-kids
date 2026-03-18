import React, {
    forwardRef,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import {
    animated,
    useTransition,
} from '@react-spring/web';
import clsx from 'clsx';
import ReactDOM from 'react-dom';

import { SVG } from '@/assets/icons';
import { Typography } from '@/components/Typography';
import { colorClassBuilder } from '@/utils';

import {
    AddFunction,
    CloseFunction,
    NotificationProps,
    NotifyItem,
} from './types';
import { Button } from '../Button';

const [
    inverseMessageBg,
    messageBg,
    errorBg,
    inverseTextColor,
] = colorClassBuilder([
    { type: 'background', color: 'overlay' },
    { type: 'background', color: 'primary' },
    { type: 'background', color: 'negative' },
    { type: 'text', color: 'primary', invertion: true },
]);

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
    (props) => {
        const {
            config = { tension: 125, friction: 20, precision: 0.1 },
            children,
            ...restProps
        } = props;
        const refMap = useMemo(() => new WeakMap(), []);
        const cancelMap = useMemo(() => new WeakMap(), []);
        const [items, setItems] = useState<NotifyItem[]>([]);
        const keyRef = useRef(1000);

        const transitions = useTransition(items, {
            from: { opacity: 0, height: 0, life: '100%' },
            keys: (item) => item.key,
            enter: (item) => async (next, cancel) => {
                cancelMap.set(item, cancel);
                await next({ opacity: 1, height: refMap.get(item)?.offsetHeight });
                await next({ life: '0%' });
            },
            leave: [{ opacity: 0 }, { height: 0 }],
            onRest: (result, ctrl, item) => {
                setItems((state) => state.filter((i) => i.key !== item.key));
            },
            config: (item, index, phase) => (key) => (phase === 'enter' && key === 'life'
                ? { duration: item.duration }
                : config),
        });

        const addFunc: AddFunction = ({
            duration = 5000,
            key,
            title,
            state,
            inverse,
            showButton,
            buttonLabel = '',
            onClick,
            className,
        }) => {
            setItems((states) => {
                if (states.some((item) => item.key === key)) {
                    return states;
                }

                return [
                    ...states,
                    {
                        // eslint-disable-next-line no-plusplus
                        key: key || keyRef.current++,
                        duration: duration || 4000,
                        title,
                        state,
                        inverse,
                        showButton,
                        buttonLabel,
                        onClick,
                        className,
                    },
                ];
            });
        };

        const closeFunc: CloseFunction = (key) => {
            setItems((state) => state.filter((i) => i.key !== key));
        };

        useEffect(() => {
            children(addFunc, closeFunc);
        }, []);

        return ReactDOM.createPortal(
            <div className='fixed left-1/2 -translate-x-1/2 bottom-[10px]'>
                {transitions(({ life, ...style }, item) => {
                    let bgColor;
                    if (item.state === 'Error') {
                        bgColor = errorBg;
                    } else {
                        bgColor = item.inverse ? inverseMessageBg : messageBg;
                    }

                    return (
                        <animated.div
                            style={style}
                            key={item.key}
                            {...restProps}
                            className=''
                        >
                            <div
                                ref={(ref: HTMLDivElement) => ref && refMap.set(item, ref)}
                                className={clsx(
                                    'rounded-e-3x rounded-s-3x mt-3x',
                                    bgColor,
                                    'shadow-6x',
                                    'w-max xl:p-6x p-4x flex justify-between items-center xl:gap-6x gap-4x',
                                    item.className,
                                )}
                            >
                                <Typography
                                    inverted={item.inverse || item.state !== 'Message'}
                                    textType='Paragraph'
                                    size="M"
                                    color='primary'
                                >
                                    {item.title}
                                </Typography>
                                {item.showButton && (
                                    <>
                                        {item.state === 'Error' ? (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (cancelMap.has(item) && life.get() !== '0%') {
                                                        cancelMap.get(item)();
                                                    }
                                                }}
                                            >
                                                <SVG.CrossIcon
                                                    width={16}
                                                    height={16}
                                                    className={inverseTextColor}
                                                />
                                            </button>
                                        ) : (
                                            <Button
                                                variant='Primary'
                                                size='XS'
                                                label={item.buttonLabel}
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                        </animated.div>
                    );
                })}
            </div>,
            document.body,
        );
    },
);
