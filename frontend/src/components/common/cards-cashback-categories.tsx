import {ActionIcon, Avatar, Card, Group, Space, Spoiler, Text} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {Cross1Icon} from "@radix-ui/react-icons";
import {storeCashBacks} from "../../store/cashbacks-list";
import {ModalDeleteSubscriptions} from "../shared/modal-delete-subscriptions";

export const CardsCashbackCategories = (props:{
    name:string,
    mcc: number,
    percent: number,
    description: string,
    until: number
}) => {
    const mdscreen = useMediaQuery('(min-width: 992px)');
    const {confirmDelete, setConfirmDelete} = storeCashBacks
    let date = new Date(props.until)
    return(
        <>
            <ModalDeleteSubscriptions/>
            <Card radius={"xs"} shadow={"md"}>
                <Spoiler maxHeight={mdscreen ? 200: 110} showLabel="Полные условия" hideLabel="Скрыть полные условия">
                    <Group noWrap>
                        <Avatar radius={"lg"} size={"xs"}>
                            MG
                        </Avatar>
                        <Group sx={{width:"100%"}} spacing={"xs"} direction={"column"}>
                            <Text lineClamp={1}>{props.name}</Text>
                        </Group>
                        <Text lineClamp={1} align={"right"} sx={{width:"100px"}} size={"xl"}>
                            {props.percent}%
                        </Text>
                        <ActionIcon size={"xs"} onClick={()=> setConfirmDelete(props.mcc)}>
                            <Cross1Icon/>
                        </ActionIcon>
                    </Group>
                    <Space h={"xs"}/>
                    <Group spacing={"xs"} grow direction={mdscreen ? "row" : "column"}>
                        <Text lineClamp={1} align={mdscreen ? "right" : "left"} size={"sm"}> 399 рублей/месяц</Text>
                        <Text lineClamp={1} size={"xs"} color={"gray"}>Ближайшая дата списания: {date.toLocaleDateString()}</Text>
                    </Group>
                    <Space h={"xs"}/>
                    <Text size={"xs"} color={"gray"}>{"MCC: "+props.mcc + ". " +  props.description}
                    </Text>
                </Spoiler>
            </Card>
        </>
    )
}