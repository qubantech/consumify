import React from 'react';
import { Group, Space, Spoiler, Title } from '@mantine/core';
import PromoCode from '../../shared/promo-code';
import { PromoCodeInterface } from '../../@types';


const data = [
    {
        shop: 'Пятерочка',
        title: '5 доставок за 1₽',
        description: 'Доставка продуктов',
        color: 'red',
    },
    {
        shop: 'Delivery',
        title: 'Скидка 200₽ на первый заказ',
        description: 'Доставка еды',
        color: 'green',
    },
    {
        shop: 'Яндекс.Еда',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#fc0',
    },
    {
        shop: 'Самокат',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#D6336C',
    },
    {
        shop: 'Пятерочка',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: 'red',
    },
    {
        shop: 'Пятерочка',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: 'red',
    },
    {
        shop: 'Delivery',
        title: 'Скидка 200₽ на первый заказ',
        description: 'Доставка еды',
        color: 'green',
    },
    {
        shop: 'Яндекс.Еда',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#fc0',
    },
    {
        shop: 'Самокат',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#D6336C',
    },
]

export const PromoCodeBlock = () => {

    return (
        <div style={{ width: '100%' }}>
            <Title order={1}>
                Промокоды
            </Title>
            <Space/>
            <Spoiler maxHeight={170} hideLabel={'Свернуть'} showLabel={'Показать все предложения'}>
                <Group position='center'>
                    {
                        data.map((item: PromoCodeInterface) => {
                            return (
                                <PromoCode promoCode={item}/>
                            )
                        })
                    }
                </Group>
            </Spoiler>
            <Space/>
        </div>
    )
}