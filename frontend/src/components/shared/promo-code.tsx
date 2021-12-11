import React from 'react';

import { PromoCodeInterface } from "../../http/models";
import { Card, Title, Text, Space } from "@mantine/core";


export const PromoCode = (props: {
    promoCode: PromoCodeInterface
}) => {
    return (
        <div style={{ width: '125px' }}>
            <Card shadow='sm' padding='xs' sx={
                (theme) => ({
                    background: theme.colorScheme === 'dark' ? `linear-gradient(to bottom right, ${props.promoCode.color} 1%, #373A40 )` : `linear-gradient(to bottom right, ${props.promoCode.color} 1%, white )`,
                })}>
                <Text size='md' weight='bold' sx={
                    (theme) => ({
                        color: theme.colorScheme === 'light' ? '#000' : '#C1C2C5',
                    })}>{props.promoCode.shop}</Text>
                <Text size='xs' sx={
                    (theme) => ({
                        color: theme.colorScheme === 'light' ? '#2C2E33' : '#C1C2C5',
                        lineHeight: 1,
                    })}>{props.promoCode.description}</Text>
                <Space h='xs'/>
                <Title order={6} sx={
                    (theme) => ({
                        color: theme.colorScheme === 'light' ? '#000' : '#C1C2C5',
                        lineHeight: 1,
                    })}>{props.promoCode.title}</Title>
            </Card>
        </div>
    )
}