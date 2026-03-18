import React from 'react';

import {
    Tab,
    TabContext,
} from './Tab';
import { TabGroupProps } from './types';

export const TabsGroup = ({ value, onTabChange, options }: TabGroupProps) => {
    const state = React.useMemo(() => ({ value, onTabChange }), [value, onTabChange]);

    return (
        <div className='flex px-2x gap-2x'>
            <TabContext.Provider value={state}>
                {options.map((option) => (
                    <Tab key={option.value} {...option} />
                ))}
            </TabContext.Provider>
        </div>
    );
};
