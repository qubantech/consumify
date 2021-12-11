import React from 'react';

import { Button, Group, Modal } from '@mantine/core';
import { CheckIcon, Cross1Icon } from '@radix-ui/react-icons';

import { observer } from 'mobx-react-lite';
import { storeCashBacks } from '../../store/cashbacks-list';


export const ModalDeleteSubscriptions = observer(() => {

    const { confirmDelete, deleteSubscription, setConfirmDelete } = storeCashBacks


    return (
        <Modal
            zIndex={1000}
            opened={confirmDelete !== -1}
            onClose={() => setConfirmDelete(-1)}
            title={'Точно хотите отменить подписку?'}>
            size={'xs'}
            <Group grow>
                <Button color={'green'}
                        leftIcon={<Cross1Icon/>}
                        onClick={() => setConfirmDelete(-1)}
                >
                    Нет
                </Button>
                <Button color={'red'}
                        leftIcon={<CheckIcon/>}
                        onClick={() => deleteSubscription(confirmDelete)}
                >
                    Да
                </Button>
            </Group>
        </Modal>
    )

})