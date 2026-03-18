import React, {
    useEffect,
    useState,
} from 'react';

import { StoryFn } from '@storybook/react';

import {
    Divider,
    Tooltip,
} from '@/components';
import { useActiveBreakpoint } from '@/utils/hooks/useActiveBreakpoint';

export const BreakpointDecorator = (Story: StoryFn) => {
    const [breakpoint, setBreakpoint] = useState<string>('');
    const { activeBreakpoint, breakpointsList } = useActiveBreakpoint();

    useEffect(() => {
        if (activeBreakpoint) {
            setBreakpoint(`${activeBreakpoint.key} >= ${activeBreakpoint.value}`);
        }
    }, [activeBreakpoint?.key]);

    return (
        <div>
            <div className='flex w-full justify-end pb-4'>
                <Tooltip
                    placement="bottom-end"
                    tooltipContent={
                        <div className='!text-[12px] !text-light-text-primary p-1x'>
                            {breakpointsList.map((b) => <div key={b.key} className='uppercase p-1x'>{b.key} {'>='} {b.value}</div>)}
                        </div>
                    }
                >
                    <div className='cursor-pointer border-[1px] border-light-stroke-secondary rounded-[8px] py-2 px-2 flex items-end !text-[12px] gap-1'>
                        <div className='!text-light-text-brand'>Текущий брейкпойнт:</div>
                        <div className='!text-light-text-primary uppercase'>{breakpoint}</div>
                    </div>
                </Tooltip>
            </div>
            <Divider className='mb-6x' />
            <Story />

        </div>
    );
};
