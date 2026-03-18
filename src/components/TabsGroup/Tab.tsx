import React from 'react';

import {
    TabProps,
    TabsContextType,
} from './types';
import { Button } from '../Button';

export const TabContext = React.createContext<TabsContextType>({} as TabsContextType);

export const Tab = (props: TabProps) => {
    const {
        variant = 'Link', size = 'M', label, value, ...restProps
    } = props;

    const context = React.useContext(TabContext);

    const handleClick = () => {
        context.onTabChange?.(value);
    };

    return (
        <Button
            className='first:ml-0 last:mr-0'
            onClick={handleClick}
            isInverted={context.value === value}
            isEnabled={context.isEnabled}
            label={label}
            variant={context.value === value ? 'Primary' : variant}
            size={size}
            {...restProps}
        />
    );
};
