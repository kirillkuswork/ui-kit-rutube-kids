import { ButtonProps } from '../Button/types';

export type TabProps = Pick<ButtonProps, 'size' | 'label' | 'isEnabled' | 'onClick' | 'variant'> & {
    onTabChange?: (tabValue: string) => void,
    value: string, };

export type TabGroupProps = {
    value: string,
    onTabChange?: (tabValue: string) => void,
    options: TabProps[],
};

export type TabsContextType = {
    value: TabProps['value'];
    onTabChange: TabProps['onTabChange'];
    isEnabled?: TabProps['isEnabled']
};
