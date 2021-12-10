import React from 'react';
import {Card, Text, Badge, Button, Group, Menu} from '@mantine/core';
import { getColor } from "../../methods/color-picker";
import { CardInterface } from "../../http/models";
import { PlusIcon } from '@radix-ui/react-icons'

const CardItem = ( props:CardInterface ) => {
    return (
        <div style={{width: '220px'}}>
            <Card shadow='md' padding='xs'>
                <Card.Section>
                    <div style={{ marginTop: '-20px' ,height: '180px', backgroundColor: getColor(props.id, props.total) }}>
                        <Group position="apart" sx={{margin: 5}}>
                            {
                                props.partner &&
                                <Badge variant='filled' size='xs'
                                       sx={{margin: '10px'}}>
                                    Partner
                                </Badge>
                            }
                            <Menu shadow='md' sx={
                            (theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? 'gray' : 'lightgray',
                                borderRadius: '8px',
                                '&:focus': {
                                backgroundColor: 'darkgray',
                            }
                            })}>
                                <Menu.Item icon={<PlusIcon/>} sx={{padding: '7px'}}>Рекомендовать чаще</Menu.Item>
                            </Menu>
                        </Group>
                    </div>
                </Card.Section>
                    <Group position="apart" sx={{ marginBottom: 5, marginTop: 10}}>
                        <Text>
                            { props.name }
                        </Text>
                        <Badge>
                            { props.cashback }%
                        </Badge>
                    </Group>
                    <Group position="apart" sx={{marginTop: 30}}>
                        <Button size="sm" sx={{ padding: '5px 30px' }}>
                            { props.price }₽
                        </Button>
                    </Group>
            </Card>
        </div>
    );
};

export default CardItem;