import React, {
    FC,
    HTMLAttributes,
    useContext,
    useMemo,
} from 'react';

import clsx from 'clsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import MediaQuery from 'react-responsive';

import { SVG } from '@/assets/icons';
import {
    Button,
    Typography,
} from '@/components';
import { ButtonStack } from '@/components/Button/ButtonStack';
import { MobileModal } from '@/components/Modal/MobileModal';
import { colorClassBuilder } from '@/utils';

import { BaseModalCtx } from './BaseModal.context';
import {
    BaseModalProps,
    BottomContentGroupProps,
    ModalFooterProps,
    TopContentGroupProps,
} from './types';
import { Dummy } from '../../Dummy';
import { Modal } from '../Modal';

const MIN_WIDTH = 744;
const MAX_WIDTH = 743;

export const BaseModalWrapper = ({
    type = 'PopUp',
    onClose: handleOnClose,
    showCloseButton = true,
    children,
    animation,
    top,
    anchor,
    showOverlay,
    className = '',
    ...modalProps
}: BaseModalProps) => {
    const ctxValue = useMemo(
        () => ({
            handleOnClose,
            showCloseButton,
        }),
        [handleOnClose, showCloseButton],
    );

    const bgColor = colorClassBuilder({ type: 'background', color: 'primary' });

    const commonClasses = `${bgColor} relative max-h-screen box-border flex flex-col`;
    const mobileFullscreen = type === 'SidePanel';

    return (
        <BaseModalCtx.Provider value={ctxValue}>
            <MediaQuery minWidth={MIN_WIDTH}>
                <Modal
                    alignRight={type === 'SidePanel'}
                    onClose={handleOnClose}
                    {...modalProps}>
                    <div
                        className={clsx(
                            className,
                            type === 'PopUp' && 'w-[480px]',
                            type === 'SidePanel' && 'w-[480px] h-screen rounded-r-none',
                            commonClasses,
                            'pt-10x px-12x overflow-y-auto rounded-[12px] pb-12x gap-y-10x',
                        )}
                    >
                        {children}
                    </div>
                </Modal>
            </MediaQuery>
            <MediaQuery maxWidth={MAX_WIDTH}>
                <MobileModal
                    backdropProps={{ transparent: showOverlay }}
                    anchor={anchor}
                    onClose={handleOnClose}
                    top={top}
                    mobileFullscreen={mobileFullscreen}
                    className={className}
                    {...modalProps}
                >
                    <div className={clsx(
                        mobileFullscreen && 'h-screen !rounded-none !pb-6x',
                        !mobileFullscreen && 'max-h-[calc(100vh-24px)]',
                        commonClasses,
                        'rounded-t-[12px] pt-6x px-8x pb-10x gap-y-10x',
                    )}>
                        {children}
                    </div>
                </MobileModal>
            </MediaQuery>
        </BaseModalCtx.Provider>
    );
};

const ModalHeader = ({
    className = '',
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) => {
    const { handleOnClose, showCloseButton } = useContext(BaseModalCtx);

    return <header className={clsx(className, 'grid grid-cols-1 gap-y-3x relative')} {...props}>

        {/* заменить на IconButton */}
        {showCloseButton && <div className='absolute right-0' onClick={handleOnClose}>
            <Button size='S'
                variant='Link'
                iconColor='secondary'
                icon={<SVG.CrossIcon />}/>
        </div>}
        {children}
    </header>;
};

const TopContentGroup = ({ children, ...props }:TopContentGroupProps) => (
    <div className="grid grid-cols-[1fr_auto] gap-x-6x" {...props}>
        <Typography size='XS'
            color="primary"
            fontType='Headline'>
            {children}
        </Typography>
    </div>
);

const BottomContentGroup = ({
    className = '',
    children,
    ...props
}:BottomContentGroupProps) => <div className={className} {...props}>
    <Typography size='M'
        color="secondary"
        textType='Paragraph'
        fontType='Text'>
        {children}
    </Typography>
</div>;

const ModalBody = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => <div
    className={clsx(
        className,
        'flex flex-1 overflow-y-scroll !translate-x-0',
    )}
    {...props}>
    {children || <Dummy className='w-full min-h-[100px] h-full'/>}
</div>;

const ModalFooter:FC<ModalFooterProps> = ({
    type,
    firstButton,
    secondButton,
    gap = '2x',
    isStretched,
    showButtons = true,
    size = 'L',
    children,
    ...props
}) => (showButtons ? <div className='w-full' {...props}>
    {type === 'ButtonStack' && <ButtonStack
        size={size}
        isStretched={isStretched}
        gap={gap}
        firstButton={firstButton}
        secondButton={secondButton}
    />}
    {type === 'Custom' && (children || <Dummy className='w-full min-h-[48px] h-full'/>)}
</div> : null);

export const BaseModal = {
    Wrapper: BaseModalWrapper,
    ModalHeader,
    TopContentGroup,
    BottomContentGroup,
    ModalBody,
    ModalFooter,
};
