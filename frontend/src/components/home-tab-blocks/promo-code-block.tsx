import React from 'react';
import {Group, Space, Title, MediaQuery} from "@mantine/core";
import PromoCode from "../shared/promo-code";
import {PromoCodeInterface} from "../../http/models";
import {DISPLAY_NONE} from "../../meta/paths";

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
            <MediaQuery smallerThan="xs" styles={DISPLAY_NONE}>
                <Group className={'hide-scroll'} align='top' noWrap={true} style={{overflowX: "auto", width: '300px'}}>
                    {
                        data.map( (item:PromoCodeInterface ) => {
                            return (
                                <PromoCode promoCode={ item }/>
                            )
                        })
                    }
                </Group>
            </MediaQuery>


            <MediaQuery smallerThan="md" largerThan="xs" styles={DISPLAY_NONE}>
                <Group className={'hide-scroll'} align='top' noWrap={true} style={{overflowX: "auto", width: '650px'}}>
                    {
                        data.map( (item:PromoCodeInterface ) => {
                            return (
                                <PromoCode promoCode={ item }/>
                            )
                        })
                    }
                </Group>
            </MediaQuery>


            <MediaQuery smallerThan="xl" largerThan="md" styles={DISPLAY_NONE}>
                <Group className={'hide-scroll'} align='top' noWrap={true} style={{overflowX: "auto", width: '920px'}}>
                    {
                        data.map( (item:PromoCodeInterface ) => {
                            return (
                                <PromoCode promoCode={ item }/>
                            )
                        })
                    }
                </Group>
            </MediaQuery>
            <Space/>
        </div>
    );
};

export default PromoCodeBlock;