import React from 'react';

import { Card, Text, Badge, Button, Group, Menu } from '@mantine/core';
import { PlusIcon } from '@radix-ui/react-icons'

import { CardInterface } from "../@types";

import { getColor } from "../../methods/color-picker";
import {storeTotalRecommendations} from "../../store";


export const CardItem = (props: { card: CardInterface }) => {

    return (
        <div style={{width: '260px'}}>
            <Card shadow='md' padding='xs' style={{height:"100%"}} onClick={()=>storeTotalRecommendations.onClickOffers(props.card.id)}>
                <Card.Section>
                    <div style={{
                        marginTop: '-20px',
                        height: '180px',
                        backgroundColor: getColor(props.card.id, 16)
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
                <Group direction="column" position="apart" sx={{ marginBottom: 5, marginTop: 10 }}>
                    <Text>
                        {props.card.name}
                    </Text>
                    <Text size={"xs"}>
                        {props.card.total}
                    </Text>
                    <Badge size={"lg"}>
                        {props.card.cashback.toPrecision(2)}₽
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