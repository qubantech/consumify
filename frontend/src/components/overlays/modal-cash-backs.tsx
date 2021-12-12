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
} from '@mantine/core'

import { observer } from 'mobx-react-lite'
import { storeCashBacks, storeProfile } from '../../store'

import MirLogo from '../../assets/mir-logo.svg'

import {
    CardsCashbackPartners,
    CardsCashbackCategories,
    SelectSubscriptions
} from '../shared'


export const ModalCashBacks = observer(() => {

    const { isOpen, setIsOpen } = storeCashBacks

    const theme = useMantineTheme()


    const onModalClose = () => setIsOpen(false)


    const {partnersAllList, partnersUserList, subscriptionsUserList, isFetching} = storeCashBacks

    return (
        <Modal
            transition='fade'
            transitionDuration={1000}
            transitionTimingFunction='ease'
            opened={isOpen}
            size={'xl'}
            padding={"xs"}
            onClose={onModalClose}
            title={'Cashbacks'}>
            {storeProfile.id != 0 ?
                (<>
                    <Center>
                        <Paper color={'green'} padding='xs' shadow='xl' radius='md' withBorder>
                            <Group>
                                <Image src={MirLogo} height={20}/>
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
                            {partnersUserList ? partnersUserList.map((item) =>
                                    <CardsCashbackPartners imageUrl={item.seller.imageUrl}
                                                           percent={item.percent}
                                                           name={item.seller.name}
                                                           description={item.description}
                                    />
                                ) :
                                <Skeleton height={100}/>
                            }
                            <Space h={'xs'}/>
                            <Divider size={'xl'}
                                     labelPosition={'center'}
                                     label={<Title order={6}>Повышенный кэшбек</Title>}/>
                            <Space h={'md'}/>
                            {partnersAllList ? partnersAllList.map((item) =>
                                <CardsCashbackPartners imageUrl={item.seller.imageUrl}
                                                       percent={item.percent}
                                                       name={item.seller.name}
                                                       description={item.description}
                                />
                            ) :
                                <Skeleton height={100}/>
                            }
                        </Tabs.Tab>
                        <Tabs.Tab label={'Кэшбек от банка'}>
                            <Divider size={'xl'}
                                     labelPosition={'center'}
                                     label={<Title order={6}>Подписка на любимые категории</Title>}/>
                            <Space h={'md'}/>
                            <SelectSubscriptions/>
                            <Space h={'xs'}/>
                            <Divider size={'xl'}
                                     labelPosition={'center'}
                                     label={<Title order={6}>Действующие подписки</Title>}/>
                            <Space h={'md'}/>
                            {subscriptionsUserList ? subscriptionsUserList.map((item)=>
                                <CardsCashbackCategories name={item.categoryCashback.category.name}
                                                         mcc ={item.categoryCashback.category.id}
                                                         percent ={item.categoryCashback.percent}
                                                         description = {item.categoryCashback.description}
                                                         until = {item.subscribedUntil}
                                />
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