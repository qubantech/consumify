import React from 'react';
import {Grid, Col, Space, Spoiler, Title} from '@mantine/core';
import { PromoCode } from '../../shared';
import { PromoCodeInterface } from '../../@types';


const data = [
    {
        shop: 'Пятерочка',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: 'red',
        code: 'firstorder',
    },
    {
        shop: 'Delivery',
        title: 'Скидка 200₽ на первый заказ',
        description: 'Доставка еды',
        color: 'green',
        code: 'newbie',
    },
    {
        shop: 'Яндекс.Еда',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#fc0',
        code: 'crazy3000',
    },
    {
        shop: 'Самокат',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#D6336C',
        code: 'crazy2000',
    },
    {
        shop: 'Пятерочка',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: 'red',
        code: 'crazy1000',
    },
    {
        shop: 'Пятерочка',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: 'red',
        code: 'chips',
    },
    {
        shop: 'Delivery',
        title: 'Скидка 200₽ на первый заказ',
        description: 'Доставка еды',
        color: 'green',
        code: 'firstorder',
    },
    {
        shop: 'Яндекс.Еда',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#fc0',
        code: 'del1rub',
    },
    {
        shop: 'Самокат',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#D6336C',
        code: 'firstorder',
    },
]

export const PromoCodeBlock = () => {

    return (
        <div style={{ width: '100%' }}>
            <Title order={2}>Промокоды</Title>
            <Space/>
            <Spoiler maxHeight={170} hideLabel={'Свернуть'} showLabel={'Показать все предложения'}>
                <Grid gutter={'xs'}>
                    {
                        data.map((item: PromoCodeInterface) => {
                            return (
                                <Col span={6}>
                                    <PromoCode promoCode={item}/>
                                </Col>
                            )
                        })
                    }
                </Grid>
            </Spoiler>
            <Space/>
        </div>
    )
}