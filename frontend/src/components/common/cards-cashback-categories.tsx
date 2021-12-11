import { ActionIcon, Avatar, Card, Group, Space, Spoiler, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Cross1Icon } from '@radix-ui/react-icons';
import { storeCashBacks } from '../../store';
import { ModalDeleteSubscriptions } from '../shared';

export const CardsCashbackCategories = () => {

    const mdScreen = useMediaQuery('(min-width: 992px)');

    const { confirmDelete, setConfirmDelete } = storeCashBacks


    return (
        <>
            <ModalDeleteSubscriptions/>
            <Card radius={'xs'} shadow={'md'}>
                <Spoiler maxHeight={mdScreen ? 200 : 110} showLabel='Полные условия' hideLabel='Скрыть полные условия'>
                    <Group noWrap>
                        <Avatar radius={'lg'} size={'xs'}>
                            MG
                        </Avatar>
                        <Group sx={{ width: '100%' }} spacing={'xs'} direction={'column'}>
                            <Text lineClamp={1}>Супермаркеты</Text>
                        </Group>
                        <Text lineClamp={1} align={'right'} sx={{ width: '100px' }} size={'xl'}>
                            5%
                        </Text>
                        <ActionIcon size={'xs'} onClick={() => setConfirmDelete(0)}>
                            <Cross1Icon/>
                        </ActionIcon>
                    </Group>
                    <Space h={'xs'}/>
                    <Group spacing={'xs'} grow direction={mdScreen ? 'row' : 'column'}>
                        <Text lineClamp={1} align={mdScreen ? 'right' : 'left'} size={'sm'}>
                            199 рублей/месяц
                        </Text>
                        <Text lineClamp={1} size={'xs'} color={'gray'}>
                            Ближайшая дата списания: 23.12.2021
                        </Text>
                    </Group>
                    <Space h={'xs'}/>
                    <Text size={'xs'} color={'gray'}>
                        Лимит кэшбека 3000 рублей в месяц. При совершении
                        более 5 покупок в день - кэшбек на 6 и последующие не начисляется.
                    </Text>
                </Spoiler>
            </Card>
        </>
    )
}