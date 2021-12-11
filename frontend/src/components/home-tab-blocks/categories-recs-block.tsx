import React from 'react';
import {
    Grid,
    Col,
    Pagination,
    Center,
    Space,
    Button,
    Skeleton,
    Group,
    Title
} from "@mantine/core";
import {CardInterface, FilterInterface} from "../../http/models";

import {storeCategoriesRecommendations} from "../../store/categories-recommendations";
import CardItem from "../shared/card-item";
import {observer} from "mobx-react-lite";

const CategoriesRecsBlock = observer(() => {
    const {isFetching, currCards, total, setCurrentPage, currentPage, filterOptions, filterValue, setFilterValue} = storeCategoriesRecommendations

    return (
        <div>
            <Title order={1}></Title>
            {/*<SegmentedControl
                fullWidth
                value={filterValue}
                // onChange={changeFilter}
                data={filterOptions}
            />*/}
            {!isFetching &&
            <div>
                <div>
                    <Group position={"left"} spacing={"xs"}>
                        {filterOptions && (
                            filterOptions.map((button:FilterInterface) =>
                                <Button size={"sm"}
                                        color={(filterValue == button.value) ? "grape" : "gray"}
                                        onClick={() => setFilterValue(button.value)}>
                                    {button.label}
                                </Button>
                            ))}
                    </Group>
                </div>
                <Space h="md" />
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
            || <Skeleton height={200} mt={6} radius="xl" />
            }
        </div>
    );
});

export default CategoriesRecsBlock;