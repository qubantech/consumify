import React from 'react'

import { Card, Divider, Group, Space, Text } from '@mantine/core'
import { storeCheck } from '../../../store'


export const Check = () => {

    const { isFetching, mcc, items, shop, total } = storeCheck

    return (
        <div style={{ width: '300px' }}>
            {
                !isFetching &&
                <Card shadow='sm' padding='sm'>
                    <Text>mcc: {mcc}</Text>
                    <Text>Магазин: {shop} </Text>
                    <Space/>
                    <Divider/>
                    <Space/>
                    {
                        items.map((item) => {
                            return (
                                <Group position='apart'>
                                    <Text>
                                        {item.name}
                                    </Text>
                                    <Text>
                                        {item.price}₽
                                    </Text>
                                </Group>
                            )
                        })
                    }
                    <Space/>
                    <Divider/>
                    <Space/>
                    <Text align='right' size='xl'>Итог: {total}₽</Text>
                </Card>
            }
        </div>
    )
}