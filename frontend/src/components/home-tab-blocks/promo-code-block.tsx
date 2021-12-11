import React from 'react';
import {Group, Space, Title} from "@mantine/core";
import PromoCode from "../shared/promo-code";
import {PromoCodeInterface} from "../../http/models";

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

const PromoCodeBlock = () => {
    return (
        <div>
            <Title order={1}>Промокоды</Title>
            <Space/>
            <Group className={'hide-scroll'} align='top' noWrap={true} style={{overflowX: "auto"}}>
                {
                    data.map( (item:PromoCodeInterface ) => {
                        return (
                            <PromoCode promoCode={ item }/>
                        )
                    })
                }
            </Group>
            <Space/>
        </div>
    );
};

export default PromoCodeBlock;