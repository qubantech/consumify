import {Button, Center, Group, Select, Space, Text} from "@mantine/core";
import {ForwardedRef, forwardRef, useState} from "react";
import {storeCashBacks} from "../../store/cashbacks-list";
import {Category} from "../../http/models/category-models/category";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";


export const SelectSubscriptions = observer(() => {
    const {subscriptionsAllList, addSubscription } = storeCashBacks
    const [value, setValue] = useState("")

    const SelectItem = forwardRef(
        ({ id, label, ...others }:Category, ref:ForwardedRef<any>) => (
            <div ref={ref} {...others}>
                <Group noWrap>
                    <div>
                        <Text>{label}</Text>
                        <Text size="xs" color="dimmed">
                            MCC:{id} / 399 рублей/месяц
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
                value={value}
                onChange={(newvalue) =>
                    {
                        if (!newvalue) setValue("")
                        else setValue(newvalue)
                    }
                }
                searchable
                maxDropdownHeight={400}
                nothingFound="Такого еще нет"
                filter={(value, item) =>
                    item.label!.toLowerCase().includes(value.toLowerCase().trim())
                }
            />
            <Space h={"xs"}/>
            <Center>
                <Group>
                    <Button onClick={()=> addSubscription(Number(value))}>
                        Купить подписку
                    </Button>
                    <Text>(До 11.01.2022)</Text>
                </Group>
            </Center>
            <Center>
            <Link to={"/"}>
                <Text size={"sm"} color={"grape"}>
                    Полные условия программы лояльности
                </Text>
            </Link>
            </Center>
        </>
    )
})