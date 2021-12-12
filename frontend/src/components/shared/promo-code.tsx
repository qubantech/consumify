import React from 'react'

import { Card, Title, Text, Space, Paper, Center, Group, Transition, Avatar } from '@mantine/core'
import {useHover, useMediaQuery} from '@mantine/hooks'
import { PromoCodeInterface } from '../@types'


export const PromoCode = (props: {
    promoCode: PromoCodeInterface
}) => {

    const { hovered, ref } = useHover()

    const mdScreen = useMediaQuery('(max-width: 769px)')
    const smScreen = useMediaQuery('(max-width: 415px)')
    const xsScreen = useMediaQuery('(max-width: 376px)')


    return (
        <div style={{ width: (xsScreen ? '150px' : smScreen ? '170px' : mdScreen ? '125px' : '143px'), position: 'relative' }} ref={ref}>
            <Card shadow='sm' padding={10} sx={
                (theme) => ({
                    position: 'relative',
                    height: (xsScreen ? '150px' : smScreen ? '170px' : mdScreen ? '125px' : '143px'),
                    background: theme.colorScheme === 'dark' ? `linear-gradient(to bottom right, ${props.promoCode.color} 1%, #373A40 )` : `linear-gradient(to bottom right, ${props.promoCode.color} 1%, white )`,
                })}>
                <Avatar
                    size={150}
                    src={props.promoCode.src}
                    sx={{
                        position: 'absolute',
                        zIndex: 0,
                        right: -70,
                        bottom: -70,
                        opacity: 0.5,
                    }}
                />
                <Text size='md' weight='bold' sx={
                    (theme) => ({
                        color: theme.colorScheme === 'light' ? '#000' : '#eaeaea',
                    })}>{props.promoCode.shop}</Text>
                <Text size='xs' sx={
                    (theme) => ({
                        color: theme.colorScheme === 'light' ? '#2C2E33' : '#d9d9d9',
                        lineHeight: 1,
                    })}>{props.promoCode.description}</Text>
                <Transition mounted={!hovered} transition='pop' duration={300} timingFunction='ease'>
                    {(styles) =>
                        <Group direction={'row'} spacing={10}
                               style={{ ...styles, position: 'absolute', bottom: 20, }}>

                            {/*<Space h='xl'/>*/}
                            <Title order={6} sx={
                                (theme) => ({
                                    color: theme.colorScheme === 'light' ? '#000' : '#ffffff',
                                    lineHeight: 1,
                                    position: 'relative',
                                    zIndex: 5,

                                })}>{props.promoCode.title}</Title>
                        </Group>}
                </Transition>
                <Space h='xs'/>
                <Transition mounted={hovered} transition='pop' duration={300} timingFunction='ease'>
                    {(styles) =>
                        <Group direction={'column'} position={'center'} style={styles}>
                            <Paper padding={3} shadow={'sm'}>
                                <Center>
                                    <Text size={'sm'} sx={{padding: '2px 10px'}}>{props.promoCode.code}</Text>
                                </Center>
                            </Paper>
                            <Text size={'xs'} color={'#ffffff'}>До 31 декабря</Text>
                        </Group>
                    }
                </Transition>
            </Card>
        </div>
    )
}