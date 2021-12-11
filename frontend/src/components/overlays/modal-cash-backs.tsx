import React from 'react'

import {
    Center,
    Divider,
    Group,
    Image,
    Menu,
    Modal,
    Paper,
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


    return (
        <Modal
            transition='fade'
            transitionDuration={1000}
            transitionTimingFunction='ease'
            opened={isOpen}
            size={'xl'}
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
                            <CardsCashbackPartners/>
                            <Space h={'xs'}/>
                            <Divider size={'xl'}
                                     labelPosition={'center'}
                                     label={<Title order={6}>Повышенный кэшбек</Title>}/>
                            <Space h={'md'}/>
                            <CardsCashbackPartners/>
                            <CardsCashbackPartners/>
                            <CardsCashbackPartners/>
                            <CardsCashbackPartners/>
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
                            <CardsCashbackCategories/>
                        </Tabs.Tab>
                    </Tabs>
                </>)
                :
                (<Text> You not authorized :(</Text>)
            }
        </Modal>

    );

})