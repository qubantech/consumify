import React from 'react';
import {storeTotalRecommendations} from "../../store/total-recommendations";
import {Center, Col, Grid, Pagination, Space} from "@mantine/core";
import {CardInterface} from "../../http/models";
import CardItem from "../shared/card-item";

const TotalRecsBlock = () => {
    const {currCards, total, setCurrentPage, currentPage} = storeTotalRecommendations;

    return (
        <>
            {
                !storeTotalRecommendations.isFetching &&
                <div>
                    <Grid gutter={"sm"}>
                        {currCards && (
                            currCards.map((card: CardInterface) =>
                                <Col key={card.id} span={12} xs={6} md={4} lg={4} xl={3}>
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