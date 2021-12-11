import React from 'react';
import {storeTotalRecommendations} from "../../store/total-recommendations";
import {Center, Col, Grid, Pagination, Space, Title} from "@mantine/core";
import {CardInterface} from "../../http/models";
import CardItem from "../shared/card-item";
import {observer} from "mobx-react-lite";

// const card = {
//     name: "card",
//     id: 0,
//     total: 20,
//     cashback: 3,
//     partner: true,
//     price: 1000,
// }

const TotalRecsBlock = observer(() => {
    const {isFetching, currCards, total, setCurrentPage, currentPage} = storeTotalRecommendations;

    return (
        <>
            <Title order={1}>Рекомендовано Вам</Title>
            <Space h={"sm"}/>
            {
                !isFetching &&
                <div>
                    <Grid gutter={"sm"} justify='center'>
                        {currCards && (
                            currCards.map((card: CardInterface) =>
                                <Col key={card.id} span={12} xs={6} sm={4} md={3} lg={3} xl={3}>
                                    <CardItem card={card}/>
                                </Col>
                            ))
                        }
                    </Grid>
                    <Space h="md" />
                    <Center>
                        <Pagination page={currentPage}
                                    onChange={setCurrentPage}
                                    total={total}
                                    radius={"xl"}
                                    siblings={1}/>
                    </Center>
                </div>
            }
        </>
    );
});

export default TotalRecsBlock;