import React from 'react'
import { storeTotalRecommendations } from "../../../store"
import { Center, Col, Grid, Pagination, Skeleton, Space, Title } from "@mantine/core"

import { CardItem } from "../../shared/card-item"
import { observer } from "mobx-react-lite"
import { CardInterface } from "../../@types"


export const TotalRecommendationsBlock = observer(() => {

    const { isFetching, currCards, total, setCurrentPage, currentPage } = storeTotalRecommendations

    return (
        <>
            <Title order={1}>Популярные предложения</Title>
            <Space/>
            <Skeleton visible={isFetching}>
                <Grid gutter={"sm"} justify='center'>
                    {currCards && (
                        currCards.map((card: CardInterface) =>
                            <Col key={card.id} span={12} xs={6} sm={4} md={3} lg={3} xl={3}>
                                <Center>
                                    <CardItem card={card}/>
                                </Center>
                            </Col>
                        ))
                    }
                </Grid>
                <Space h="md"/>
                <Center>
                    <Pagination page={currentPage}
                                onChange={setCurrentPage}
                                total={total}
                                radius={"xl"}
                                siblings={1}/>
                </Center>
            </Skeleton>
        </>
    );
});