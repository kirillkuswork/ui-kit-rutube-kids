import React, { FC } from 'react';

import clsx from 'clsx';

import { DummyProps } from './types';

export const Dummy: FC<DummyProps> = ({ className = '', isSecondColor, children }) => (
    // Используются цвета, которых нет в палитре.
    // Заменить на цвета из билдера, если они там появятся.
    <div className={clsx(className, isSecondColor ? 'bg-[#FFC5DD]/[0.4] border-[#FF429D]' : 'bg-[#EFE8FD] border-[#DBC5FF66]', 'flex items-center justify-center text-center border-dashed border-[1px] rounded-[8px]')}>{children}</div>
);
