import React, { useEffect, useState } from 'react'
import {
    Anchor,
    Avatar,
    Badge,
    Blockquote,
    Box,
    Breadcrumbs,
    Button,
    Card,
    Center,
    Divider,
    Drawer,
    Group,
    Space,
    Table,
    Text,
    Title,
    Modal
} from '@mantine/core'
import { getColor } from "../../methods/color-picker";
import { OfferModel } from "../../http/models/offer-models/offer-model";
import { useMediaQuery } from "@mantine/hooks";


export const OfferModal = (props: {
    product: {
        id: number,
        name: string,
    },
    offers: Array<{
        seller: {
            id: number,
            name: string,
            imageUrl: string,
            category: {
                id: number,
                name: string
            }
        },
        price: number,
        cashbackValue: number
    }>
}) => {

    const [ opened, setOpened ] = useState(true)

    const desktopSize = useMediaQuery('(min-width: 588px)');
    const mobileSize = useMediaQuery('(max-width: 587px)')
    const xsMobileSize = useMediaQuery('(max-width: 321px)')

    const digitsAfterDot = (num: number, digits: number) => Math.round(num * (10 ** digits)) / 10 ** digits


    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                transition="fade"
                transitionDuration={600}
                transitionTimingFunction="ease"
                size={ mobileSize ? '100%' : desktopSize ? '50%' : '70%' }
                padding={'xs'}
                overflow={'outside'}
            >
                <Center>
                    <Group direction="column">
                        <Title order={3}>{props.product.name}</Title>
                        {
                            props.offers.map(offer => {
                                return (
                                    <Box
                                        sx={(theme) => ({
                                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                                            textAlign: 'center',
                                            padding: xsMobileSize ? theme.spacing.xs : theme.spacing.sm,
                                            borderRadius: theme.radius.md,
                                            cursor: 'pointer',

                                            '&:hover': {
                                                backgroundColor:
                                                    theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                                            },
                                        })}
                                    >
                                        <Center>
                                            <Group style={{ padding: '0', margin: '0' }}>
                                                {
                                                    !mobileSize && <Avatar size={'xl'} src={offer.seller.imageUrl}/>
                                                }
                                                <Group>
                                                    <Group direction={'column'} spacing={10}>
                                                        <Badge variant="outline" >
                                                            {offer.seller.name}
                                                        </Badge>
                                                        <Text size='xs' style={{marginTop: '-7px', marginLeft: '2px'}}>
                                                            {offer.seller.category.name}
                                                        </Text>
                                                        <Text align='center' size='sm' >
                                                            Кэшбэк: {digitsAfterDot(offer.cashbackValue, 2)}₽
                                                        </Text>
                                                    </Group>
                                                    {
                                                        !xsMobileSize && <Space w={20}/>
                                                    }
                                                    <Button size='xs'>
                                                        {offer.price} ₽
                                                    </Button>
                                                </Group>
                                            </Group>
                                        </Center>
                                    </Box>
                                )
                            })
                        }
                    </Group>
                </Center>
            </Modal>
        </>
    )
}