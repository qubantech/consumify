import React from 'react';
import {Card, Divider, Group, Space, Table, Text} from '@mantine/core';
import {Check} from "../../http/models/check-models/check";

const CheckItem = (
    props: {
        item:Check
    }

) => {
    let x = 0
    let x1 = 0
    return (
        <div style={{maxWidth: '450px', minWidth:'350px'}}>
                <Card shadow='sm' padding='sm' >
                    <Text>Магазин: { props.item.seller.name } </Text>
                    <Text>Mcc: { props.item.seller.category.id}</Text>
                    <Space/>
                    <Divider/>
                    <Space/>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Товар</th>
                                <th>Кол-во</th>
                                <th>Цена</th>
                                <th>Кэшбек</th>
                            </tr>
                        </thead>
                        <tbody style={{fontWeight:500}}>
                        {  props.item.positions &&
                            props.item.positions.map( (it) => {
                                return (
                                    <tr>
                                        <td>
                                            <Text align={"left"}>
                                            { it.product.name }
                                            </Text>
                                        </td>
                                        <td>
                                            {it.amount}
                                        </td>
                                        <td>
                                            <Text align={"right"}>
                                            { it.cost * it.amount }₽
                                            </Text>
                                        </td>
                                        <td>
                                            <Text color={"grape"} align={"right"}>
                                            {it.cashbackValue}
                                            </Text>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                    <Space/>
                    <Divider/>
                    <Space/>
                    <Text align='right' size='xl'>Итог: {props.item.positions.map(i=>x+=i.cost*i.amount, x=0).reverse()[0]}₽</Text>
                    <Text align={"right"} size={"xl"}>Сэкономлено {props.item.positions.map(i=>x+=i.cashbackValue, x=0).reverse()[0].toPrecision(2)}₽</Text>
                </Card>
        </div>
    );
};

export default CheckItem;