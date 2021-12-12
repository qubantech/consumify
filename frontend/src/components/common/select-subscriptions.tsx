import {Button, Center, Group, Select, Space, Text} from "@mantine/core";
import {ForwardedRef, forwardRef} from "react";
import {storeCashBacks} from "../../store/cashbacks-list";
import {Category} from "../../http/models/category-models/category";


export const SelectSubscriptions = () => {
    const {subscriptionsAllList} = storeCashBacks

    const SelectItem = forwardRef(
        ({ id, label, ...others }:Category, ref:ForwardedRef<any>) => (
            <div ref={ref} {...others}>
                <Group noWrap>
                    <div>
                        <Text>{label}</Text>
                        <Text size="xs" color="dimmed">-
                            {id}
                        </Text>
                    </div>
                </Group>
            </div>
        )
    );
    return (
        <>
            <Select
                label="Выберите категорию из списка"
                placeholder="Одна из..."
                itemComponent={SelectItem}
                data={subscriptionsAllList}
                searchable
                maxDropdownHeight={400}
                nothingFound="Nobody here"
                filter={(value, item) =>
                    item.label!.toLowerCase().includes(value.toLowerCase().trim())
                }
            />
            <Space h={"xs"}/>
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