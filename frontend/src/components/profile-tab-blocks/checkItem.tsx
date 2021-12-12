import React from 'react';
import {Card, Divider, Group, Space, Text} from '@mantine/core';
import {Check} from "../../http/models/check-models/check";

const CheckItem = (
    props: {
        item:Check
    }

) => {
    return (
        <div style={{maxWidth: '450px', minWidth:'350px'}}>
                <Card shadow='sm' padding='sm' >
                    <Text>mcc: { props.item.seller.category.id}</Text>
                    <Text>Магазин: { props.item.seller.name } </Text>
                    <Space/>
                    <Divider/>
                    <Space/>
                    {  props.item.positions &&
                        props.item.positions.map( (it) => {
                            return (
                                <Group position='apart'>
                                    <Text>
                                        { it.product.name }
                                    </Text>
                                    <Text>
                                        { it.cost }₽
                                    </Text>
                                </Group>
                            )
                        })
                    }
                    <Space/>
                    <Divider/>
                    <Space/>
                    <Text align='right' size='xl'>Итог: 1₽</Text>
                </Card>
        </div>
    );
};

export default CheckItem;