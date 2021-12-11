import { ForwardedRef, forwardRef } from 'react';

import { Avatar, Button, Center, Group, Select, Space, Text } from '@mantine/core';
import { storeCashBacks } from '../../store';

export interface SelectProps {
    image: string,
    label: string,
    value: string,
    description: string
}


export const SelectSubscriptions = () => {

    const { subscriptionsAllList } = storeCashBacks

    const SelectItem = forwardRef(
        ({ image, label, description, ...others }: SelectProps, ref: ForwardedRef<any>) => (
            <div ref={ref} {...others}>
                <Group noWrap>
                    <Avatar src={image}/>
                    <div>
                        <Text>{label}</Text>
                        <Text size='xs' color='dimmed'>
                            {description}
                        </Text>
                    </div>
                </Group>
            </div>
        )
    )

    return (
        <>
            <Select
                label='Choose employee of the month'
                placeholder='Pick one'
                itemComponent={SelectItem}
                data={subscriptionsAllList}
                searchable
                maxDropdownHeight={400}
                nothingFound='Nobody here'
                filter={(value, item) =>
                    item.label!
                        .toLowerCase()
                        .includes(
                            value
                                .toLowerCase()
                                .trim()
                        ) ||
                    item.description
                        .toLowerCase()
                        .includes(
                            value
                                .toLowerCase()
                                .trim()
                        )
                }
            />
            <Space h={'xs'}/>
            <Center>
                <Group>
                    <Button>
                        Купить подписку
                    </Button>
                    <Text>До 13.01.2022</Text>
                </Group>
            </Center>
        </>
    )
}