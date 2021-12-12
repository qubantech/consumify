import React from 'react';
import { Group, Space, Spoiler, Title } from '@mantine/core';
import { PromoCode } from '../../shared';
import { PromoCodeInterface } from '../../@types';

import delivery_logo from '../../../../src/assets/delivery-club-logo.png'
import samokat_logo from '../../../../src/assets/samokat-logo.png'
import yandex_eats_logo from '../../../../src/assets/yandex-eats-logo.png'
import pyatorochka_logo from '../../../../src/assets/pyatorochka-logo.png'


const data = [
    {
        shop: 'Пятерочка',
        title: '5 доставок за 1₽',
        description: 'Доставка продуктов',
        color: 'red',
        code: 'firstorder',
        src: pyatorochka_logo,
    },
    {
        shop: 'Delivery',
        title: 'Скидка 200₽ на первый заказ',
        description: 'Доставка еды',
        color: 'green',
        code: 'newbie',
        src: delivery_logo,
    },
    {
        shop: 'Яндекс.Еда',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#fc0',
        code: 'crazy3000',
        src: yandex_eats_logo,
    },
    {
        shop: 'Самокат',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#D6336C',
        code: 'crazy2000',
        src: samokat_logo,
    },
    {
        shop: 'Пятерочка',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: 'red',
        code: 'crazy1000',
        src: pyatorochka_logo,
    },
    {
        shop: 'Пятерочка',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: 'red',
        code: 'chips',
        src: pyatorochka_logo,
    },
    {
        shop: 'Delivery',
        title: 'Скидка 200₽ на первый заказ',
        description: 'Доставка еды',
        color: 'green',
        code: 'firstorder',
        src: delivery_logo,
    },
    {
        shop: 'Яндекс.Еда',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#fc0',
        code: 'del1rub',
        src: yandex_eats_logo,

    },
    {
        shop: 'Самокат',
        title: '5 доставок за 1₽',
        description: 'Доставка еды',
        color: '#D6336C',
        code: 'firstorder',
        src: samokat_logo,
    },
]

export const PromoCodeBlock = () => {

    return (
        <div style={{ width: '100%' }}>
            <Title order={2}>Промокоды</Title>
            <Space/>
            <Spoiler maxHeight={170} hideLabel={'Свернуть'} showLabel={'Показать все предложения'}>
                <Group spacing={'sm'} position='center'>
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