import React, {
    FC,
    MouseEvent,
    useState,
} from 'react';

import clsx from 'clsx';

import { SVG } from '@/assets/icons';
import {
    Button,
    CheckboxButton,
} from '@/components';
import { DropdownItemType } from '@/components/Dropdown/DropdownItem/types';
import { IconView } from '@/components/IconView';
import { Loader } from '@/components/Loader';
import { Typography } from '@/components/Typography';
import { colorClassBuilder } from '@/utils';

export const DropdownItem:FC<DropdownItemType> = (props) => {
    const {
        title,
        value,
        subTitle,
        leftIcon,
        rightIcon,
        img,
        isItemLoading,
        showButton,
        showCheckbox,
        buttonLabel,
        onClick: handleDropdownItemClick,
    } = props;

    const [
        iconColor,
        secondSubtractIconColor,
        hoverColor,
    ] = colorClassBuilder([
        { type: 'text', color: 'secondary' },
        { type: 'text', color: 'tertiary' },
        { type: 'background', color: 'Hover', prefix: 'hover' },
    ]);

    const [isSelected, setIsSelected] = useState(props.isSelected);
    const handleSelect = (event: MouseEvent<HTMLDivElement>) => {
        setIsSelected(!isSelected);
        handleDropdownItemClick?.({ option: props, event });
    };

    return <div onClick={(event) => handleSelect(event)}>
        <div className={clsx('flex justify-between items-center py-2x px-4x cursor-pointer', hoverColor)}>
            <div className='flex items-center gap-x-2x'>
                {showCheckbox
                    && <div onClick={(e) => e.preventDefault()}>
                        <CheckboxButton isSelected={isSelected} />
                    </div>}
                {leftIcon && <div className={clsx(iconColor, 'w-6x')}>{leftIcon}</div>}
                <div className='flex flex-col'>
                    <div className='flex'>
                        <Typography fontType='Text'
                            textType='Paragraph'
                            size='M'>{title}</Typography>
                        <Typography fontType='Text'
                            textType='Paragraph'
                            size='M'
                            color='secondary'
                        >{value}</Typography>
                    </div>
                    {subTitle && <Typography fontType='Text'
                        textType='Paragraph'
                        size='S'>{subTitle}</Typography>}
                </div>
            </div>
            <div className='flex items-center gap-x-2x'>
                {isItemLoading && <Loader size='m' />}
                {rightIcon && <div className={clsx(iconColor, 'w-6x')}>{rightIcon}</div>}
                {img && <div className='flex'>
                    <SVG.SubtractIcon className={clsx(secondSubtractIconColor, 'w-2x translate-x-[4px]')} />
                    <SVG.SubtractIcon className={clsx(iconColor, 'w-2x translate-x-[2px]')} />
                    <IconView
                        size='M'
                        bgColor='transparent'
                        showBgImage
                        image={img}/>
                </div>}
                {showButton && <Button size='XS' label={buttonLabel} />}
            </div>

        </div>
    </div>;
};
