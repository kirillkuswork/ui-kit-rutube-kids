import React, {
    forwardRef,
    useEffect,
    useState,
} from 'react';

import clsx from 'clsx';

import { colorClassBuilder } from '@/utils';
import { useActiveBreakpoint } from '@/utils/hooks/useActiveBreakpoint';

import { fontClassBuilder } from './fontClassBuilder';
import type { TypographyProps } from './Typography.types';

const breakpointsMap = {
    sm: 'Mobile',
    md: 'Tablet',
    lg: 'Desktop',
    xl: 'Desktop',
};

export const Typography = React.memo(forwardRef<HTMLHeadingElement, TypographyProps>((
    props,
    ref,
) => {
    const {
        as = 'p',
        color = 'inherit',
        inverted = false,
        children,
        className = '',
        size,
        fontType = 'Text',
    } = props;
    const { activeBreakpoint } = useActiveBreakpoint();
    const [fontClassname, setFontClassname] = useState('');
    const Component = as;
    const textColor = colorClassBuilder({
        type: 'text',
        color,
        invertion: inverted,
    });

    useEffect(() => {
        if (props.fontType === 'Headline') {
            if (activeBreakpoint) {
                const breakpoint = breakpointsMap[activeBreakpoint.key];
                const classname = fontClassBuilder({
                    fontType,
                    size,
                    breakpoint,
                });
                setFontClassname(classname);
            }
        } else {
            const {
                textType = 'Default',
                weight = 'Regular',
            } = props;
            const classname = fontClassBuilder({
                fontType,
                size,
                textType,
                weight,
            });
            setFontClassname(classname);
        }
    }, [activeBreakpoint?.key, size, fontType]);

    return (
        <Component ref={ref} className={clsx(fontClassname, textColor, className)}>
            {children}
        </Component>
    );
}));
