import React from 'react';
import {storeTotalRecommendations} from "../../store/total-recommendations";
import {Center, Col, Grid, Pagination, Space} from "@mantine/core";
import {CardInterface} from "../../http/models";
import CardItem from "../shared/card-item";

// const card = {
//     name: "card",
//     id: 0,
//     total: 20,
//     cashback: 3,
//     partner: true,
//     price: 1000,
// }

const TotalRecsBlock = () => {
    const {isFetching, currCards, total, setCurrentPage, currentPage} = storeTotalRecommendations;

    return (
        <>
            {
                !isFetching &&
                <div>
                    <Grid gutter={"sm"} justify='center'>
                        {currCards && (
                            currCards.map((card: CardInterface) =>
                                <Col key={card.id} span={12} xs={12} md={4} lg={4} xl={4}>
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
};

export default TotalRecsBlock;