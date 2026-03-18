import React, { useState } from 'react';

import { StoryFn } from '@storybook/react';

import { Input } from '@/components/Input';
import { BaseModalProps } from '@/components/Modal/BaseModal/types';

import { BaseModal } from './BaseModal';
import { Button } from '../../Button';

export default {
    title: 'Atoms/Modal',
    component: BaseModal,
    argTypes: {
        type: {
            description: 'Тип модального окна',
            control: 'radio',
            options: ['PopUp', 'SidePanel'],
        },
        showOverlay: {
            description: 'Определяет видимость оверлэя, заливки экрана в мобильном виде',
        },
        showCloseButton: {
            description: 'Определяет видимость кнопки, которая закрывает модальное окно',
        },
    },
    args: {
        type: 'PopUp',
        showOverlay: true,
        showCloseButton: true,
    },
};
export const ModalWithButtons:StoryFn<BaseModalProps> = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                label="Open Modal"
                onClick={() => setIsOpen(true)}
            />
            <BaseModal.Wrapper
                {...args}
                open={isOpen}
                onClose={() => { setIsOpen(false); }}
            >
                <BaseModal.ModalHeader>
                    <BaseModal.TopContentGroup>
                        title
                    </BaseModal.TopContentGroup>
                    <BaseModal.BottomContentGroup>
                        subtitle
                    </BaseModal.BottomContentGroup>
                </BaseModal.ModalHeader>

                <BaseModal.ModalBody/>

                <BaseModal.ModalFooter
                    type='ButtonStack'
                    isStretched
                    firstButton={
                        <Button
                            label='Title'
                            variant='Secondary'
                            isInverted />
                    }
                    secondButton={
                        <Button fullWidth
                            label='Title'
                            variant='Primary'/>
                    }
                />
            </BaseModal.Wrapper>
        </>
    );
};

export const ModalCustom:StoryFn<BaseModalProps> = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                label="Open Modal"
                onClick={() => setIsOpen(true)}
            />
            <BaseModal.Wrapper
                {...args}
                open={isOpen}
                onClose={() => { setIsOpen(false); }}
            >
                <BaseModal.ModalHeader>
                    <BaseModal.TopContentGroup>
                        Custom Modal
                    </BaseModal.TopContentGroup>
                </BaseModal.ModalHeader>

                <BaseModal.ModalBody className='justify-center'>
                    <Input variant='Base'
                        placeholder='placeholder'
                        innerLabel='label' />
                </BaseModal.ModalBody>

                <BaseModal.ModalFooter type='Custom'>
                    <Button label='Custom Button'
                        fullWidth
                        variant='Primary' />
                </BaseModal.ModalFooter>
            </BaseModal.Wrapper>
        </>
    );
};
