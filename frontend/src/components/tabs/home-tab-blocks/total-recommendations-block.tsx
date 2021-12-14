import React from 'react'

import { storeTotalRecommendations } from '../../../store'
import { Center, Col, Grid, Pagination, Skeleton, Space, Spoiler, Title } from '@mantine/core'

import { observer } from 'mobx-react-lite'

import { CardItem } from '../../shared'
import { CardInterface } from '../../@types'


export const TotalRecommendationsBlock = observer(() => {

    const { isFetching, currentCards, total, setCurrentPage, currentPage } = storeTotalRecommendations

    return (
        <>
            <Title order={2}>Рекомендуем вам</Title>
            <Space/>
                <Skeleton visible={isFetching}>
                    <Grid gutter={'sm'} justify='center'>
                        {currentCards && (
                            currentCards.map((card: CardInterface) =>
                                <Col key={card.id} span={12} xs={6} sm={4} md={3} lg={3} xl={3}>
                                    <Center>
                                        <CardItem card={card}/>
                                    </Center>
                                </Col>
                            ))
                        }
                    </Grid>
                    <Space h='md'/>
                    <Center>
                        <Pagination page={currentPage}
                                    onChange={setCurrentPage}
                                    total={total}
                                    radius={'xl'}
                                    siblings={1}/>
                    </Center>
                </Skeleton>
        </>
    );
});