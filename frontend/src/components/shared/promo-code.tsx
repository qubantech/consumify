import React from 'react'

import { Card, Title, Text, Space, Paper, Center, Group, Transition } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { PromoCodeInterface } from '../@types'


export const PromoCode = (props: {
    promoCode: PromoCodeInterface
}) => {

    const { hovered, ref } = useHover()

    return (
        <div style={{ width: '125px', position: 'relative' }} ref={ref}>
            <Card shadow='sm' padding='xs' sx={
                (theme) => ({
                    height: '140px',
                    background: theme.colorScheme === 'dark' ? `linear-gradient(to bottom right, ${props.promoCode.color} 1%, #373A40 )` : `linear-gradient(to bottom right, ${props.promoCode.color} 1%, white )`,
                })}>
                <Text size='md' weight='bold' sx={
                    (theme) => ({
                        color: theme.colorScheme === 'light' ? '#000' : '#C1C2C5',
                    })}>{props.promoCode.shop}</Text>
                <Transition mounted={!hovered} transition='pop' duration={300} timingFunction='ease'>
                    {(styles) =>
                        <Group direction={'row'} spacing={10}
                               style={{ ...styles, position: 'absolute', top: 50, width: '100px' }}>
                            <Text size='xs' sx={
                                (theme) => ({
                                    color: theme.colorScheme === 'light' ? '#2C2E33' : '#C1C2C5',
                                    lineHeight: 1,
                                })}>{props.promoCode.description}</Text>
                            {/*<Space h='xs'/>*/}
                            <Title order={6} sx={
                                (theme) => ({
                                    color: theme.colorScheme === 'light' ? '#000' : '#C1C2C5',
                                    lineHeight: 1,
                                })}>{props.promoCode.title}</Title>
                        </Group>}
                </Transition>
                <Space h='xs'/>
                <Transition mounted={hovered} transition='pop' duration={300} timingFunction='ease'>
                    {(styles) =>
                        <Group direction={'column'} position={'center'} style={styles}>
                            <Paper padding={3} shadow={'sm'}>
                                <Center>
                                    <Text size={'sm'}>{props.promoCode.code}</Text>
                                </Center>
                            </Paper>
                            <Text size={'xs'} color={'gray'}>До 31 декабря</Text>
                        </Group>
                    }
                </Transition>
            </Card>
        </div>
    )
}