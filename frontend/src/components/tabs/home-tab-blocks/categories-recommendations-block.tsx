import React from 'react';
import {
    Grid,
    Text,
    Pagination,
    Center,
    Space,
    Button,
    Skeleton,
    Group,
    Title
} from '@mantine/core';

import { CardItem } from '../../shared';
import { CardInterface, FilterInterface } from '../../@types';

import { observer } from 'mobx-react-lite';
import { storeCategoriesRecommendations } from '../../../store';


export const CategoriesRecommendationsBlock = observer(() => {

    const {
        isFetching,
        currentCards,
        total,
        setCurrentPage,
        currentPage,
        filterOptions,
        filterValue,
        setFilterValue
    } = storeCategoriesRecommendations

    return (
        <div>
            <Title order={2}>На основе ваших предпочтений</Title>
            <Space/>
            <Skeleton visible={isFetching}>
                <div>
                    <div>
                        <Group position={'left'} spacing={'xs'}>
                            {filterOptions && (
                                filterOptions.map((button: FilterInterface) =>
                                    <Button size={'sm'}
                                            color={(filterValue == button.value) ? 'grape' : 'gray'}
                                            onClick={() => setFilterValue(button.value)}>
                                        {button.label}
                                    </Button>
                                ))}
                        </Group>
                    </div>
                    <Space h='md'/>
                    <Text size={"xl"}>Скоро...</Text>
                    {/*<Grid gutter={'sm'} justify='center'>
                        {currentCards && (
                            currentCards.map((card: CardInterface) =>
                                <Col key={card.id} span={12} xs={6} sm={4} md={3} lg={3} xl={3}>
                                    <CardItem card={card}/>
                                </Col>
                            ))
                        }
                    </Grid>*/}
                    <Space h='md'/>
                    {/*<Center>
                        <Pagination page={currentPage}
                                    onChange={setCurrentPage}
                                    total={total}
                                    radius={'xl'}
                                    siblings={1}/>
                    </Center>*/}
                </div>
            </Skeleton>
        </div>
    );
});