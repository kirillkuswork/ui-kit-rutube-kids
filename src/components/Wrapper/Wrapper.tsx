import React, { ReactNode } from 'react';

import clsx from 'clsx';

export const Wrapper = ({ children }: { children: ReactNode }) => <div className={clsx(
    'flex flex-col gap-6x items-center justify-center',
    'min-h-screen w-full xl:max-w-[1080px] lg:max-w-[976px] md:max-w-[712px] max-w-[358px] mx-auto',
)}>
    {children}
</div>;
