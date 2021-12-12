import React from 'react'

import {
    Center,
    Divider,
    Group,
    Image,
    Menu,
    Modal,
    Paper, Skeleton,
    Space,
    Tabs,
    Text,
    Title,
    useMantineTheme
} from '@mantine/core';

import { observer } from 'mobx-react-lite';
import { storeCashBacks } from '../../store/cashbacks-list';
import { storeProfile } from '../../store/profile';

import mir from '../../assets/mir-logo.svg'

import { CardsCashbackPartners } from '../common/cards-cashback-partners';
import { CardsCashbackCategories } from '../common/cards-cashback-categories';
import { SelectSubscriptions } from '../common/select-subscriptions';


export const ModalCashBacks = observer(() => {

    const { isOpen, setIsOpen } = storeCashBacks
    const theme = useMantineTheme();

    const {partnersAllList, partnersUserList, subscriptionsUserList, isFetching} = storeCashBacks

    return (
        <Modal
            transition='fade'
            transitionDuration={1000}
            transitionTimingFunction='ease'
            opened={isOpen}
            size={'xl'}
            padding={"xs"}
            onClose={() => setIsOpen(false)}
            title={'Cashbacks'}>
            {storeProfile.id != 0 ?
                (<>
                    <Center>
                        <Paper color={'green'} padding='xs' shadow='xl' radius='md' withBorder>
                            <Group>
                                <Image src={mir} height={20}/>
                                <Group>
                                    <Text>****4956</Text>
                                    <Text color={'gray'}>
                                        10/23
                                    </Text>
                                    <Menu>
                                        <Menu.Item color={'red'}> Удалить карту </Menu.Item>
                                    </Menu>
                                </Group>
                            </Group>
                        </Paper>
                    </Center>
                    <Space h={'xs'}/>
                    <Center>
                        <Group spacing={'xs'} noWrap>
                            <Title order={5}> Было сэкономлено:</Title>
                            <Text size={'xl'} weight={'800'} color={'green'}>432 рубля</Text>
                        </Group>
                    </Center>
                    <Space h={'xs'}/>
                    <Tabs color={theme.primaryColor} grow>
                        <Tabs.Tab label={'Кэшбек от партнеров'}>
                            <Divider size={'xl'}
                                     labelPosition={'center'}
                                     label={<Title order={6}>Персональный кэшбек</Title>}/>
                            <Space h={'md'}/>
                            {(partnersUserList || !isFetching) ? partnersUserList.map((item) =>
                                <div>
                                    <CardsCashbackPartners imageUrl={item.seller.imageUrl}
                                                           percent={item.percent}
                                                           name={item.seller.name}
                                                           key={item.seller.name}
                                                           description={item.description}
                                    />
                                    <Space h={"xs"}/>
                                </div>
                                ) :
                                <Skeleton height={100}/>
                            }
                            <Space h={'xs'}/>
                            <Divider size={'xl'}
                                     labelPosition={'center'}
                                     label={<Title order={6}>Повышенный кэшбек</Title>}/>
                            <Space h={'md'}/>
                            {(partnersAllList || !isFetching) ? partnersAllList.map((item) =>
                                <>
                                    <CardsCashbackPartners imageUrl={item.seller.imageUrl}
                                                           percent={item.percent}
                                                           key={item.seller.name}
                                                           name={item.seller.name}
                                                           description={item.description}
                                    />
                                    <Space h={"xs"}/>
                                </>
                            ) :
                                <Skeleton height={100}/>
                            }
                        </Tabs.Tab>
                        <Tabs.Tab label={'Кэшбек от банка'}>
                            <Divider size={'xl'}
                                     labelPosition={'center'}
                                     label={<Title order={6}>Подписка на любимые категории</Title>}/>
                            <Space h={'md'}/>
                            {!isFetching ?
                                <SelectSubscriptions/>
                            : <Skeleton height={100}/>
                            }
                            <Space h={'xs'}/>
                            <Divider size={'xl'}
                                     labelPosition={'center'}
                                     label={<Title order={6}>Действующие подписки</Title>}/>
                            <Space h={'md'}/>
                            {(subscriptionsUserList || !isFetching) ? subscriptionsUserList.map((item)=>
                                <>
                                    <CardsCashbackCategories
                                                            key = {item.categoryCashback.category.id}
                                                            name={item.categoryCashback.category.name}
                                                             mcc ={item.categoryCashback.category.id}
                                                             percent ={item.categoryCashback.percent}
                                                             description = {item.categoryCashback.description}
                                                             until = {item.subscribedUntil}
                                    />
                                    <Space h={"xs"}/>
                                </>
                            ):
                                <Skeleton height={100}/>}
                        </Tabs.Tab>
                    </Tabs>
                </>)
                :
                (<Text> You not authorized :(</Text>)
            }
        </Modal>

    );

})