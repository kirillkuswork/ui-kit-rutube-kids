import { SVGAttributes } from 'react';

import { Color } from '@/types';

export interface LoaderProps extends SVGAttributes<SVGElement> {
    size: 'xl3' | 'xl2' | 'xl' | 'l' | 'm'
    color?: Color
}
