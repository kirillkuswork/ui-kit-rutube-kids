import { BaseProps } from '../../shared';
import { Color } from '../../types';

export interface ProgressBarProps extends BaseProps {
    // значение заполнения шкалы прогресс-бара
    value: number;
    showBackground?: boolean;
    color?: Color;
    size?: 'L' | 'M' | 'S',
    showSkeleton?: boolean;
    className?: string;
}
