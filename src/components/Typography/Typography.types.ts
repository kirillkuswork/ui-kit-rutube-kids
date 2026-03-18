import { ReactNode } from 'react';

import {
    CustomFontSize,
    CustomFontType,
    CustomFontWeight,
    CustomFontTextTypes,
    TextColor,
} from '@/types';

type Element =
  | 'h1'
  | 'p'
  | 'span';

type BaseProps = {
    as?: Element; // Тип элемента
    color?: TextColor; // Цвет текста
    inverted?: boolean; // Инвертировать цвет текста
    children: ReactNode; // Текст для отображения
    className?: string
};

export type TypographyProps = ({
    fontType: Extract<CustomFontType, 'Headline'>;
    size: CustomFontSize;
} & BaseProps) | ({
    fontType?: Extract<CustomFontType, 'Text'>;
    textType?: CustomFontTextTypes;
    weight?: CustomFontWeight;
    size: CustomFontSize;
} & BaseProps);
