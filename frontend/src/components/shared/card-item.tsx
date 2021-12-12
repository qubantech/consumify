import React from 'react';

import { Card, Text, Badge, Button, Group, Menu } from '@mantine/core';
import { PlusIcon } from '@radix-ui/react-icons'

import { CardInterface } from "../@types";

import { getColor } from "../../methods/color-picker";


export const CardItem = (props: { card: CardInterface }) => {

    return (
        <div style={{maxWidth: '300px', minWidth: '220px'}}>
            <Card shadow='md' padding='xs'>
                <Card.Section>
                    <div style={{
                        marginTop: '-20px',
                        height: '180px',
                        backgroundColor: getColor(props.card.id, props.card.total)
                    }}>
                        <Group position={props.card.partner ? "apart" : "right"} sx={{ margin: 5 }}>
                            {
                                props.card.partner &&
                                <Badge variant='filled' size='xs'
                                       sx={{ margin: '5px' }}>
                                    Partner
                                </Badge>
                            }
                            <Menu shadow='md' sx={
                                (theme) => ({
                                    backgroundColor: theme.colorScheme === 'dark' ? '#25262b' : 'lightgray',
                                    borderRadius: '8px',
                                    margin: '5px',
                                    '&:focus': {
                                        backgroundColor: 'darkgray',
                                    }
                                })}>
                                <Menu.Item icon={<PlusIcon/>} sx={{ padding: '7px' }}>Рекомендовать чаще</Menu.Item>
                            </Menu>
                        </Group>
                    </div>
                </Card.Section>
                <Group position="apart" sx={{ marginBottom: 5, marginTop: 10 }}>
                    <Text>
                        {props.card.name}
                    </Text>
                    <Badge>
                        {props.card.cashback}%
                    </Badge>
                </Group>
                <Group position="apart" sx={{ marginTop: 30 }}>
                    <Button size="sm" sx={{ padding: '5px 30px' }}>
                        {props.card.price}₽
                    </Button>
                </Group>
            </Card>
        </div>
    )
}