import {Avatar, Card, Group, Space, Spoiler, Text} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

export const CardsCashbackPartners = (props:{
    imageUrl: string,
    percent: number,
    name: string,
    description: string
}) => {
    const mdscreen = useMediaQuery('(min-width: 992px)');


    return (
        <Card radius={"xs"} shadow={"md"}>
            <Spoiler maxHeight={mdscreen ? 200: 40} showLabel="Полные условия" hideLabel="Скрыть полные условия">
                <Group noWrap>
                    <Avatar src={props.imageUrl} radius={"xl"}/>
                    <Group sx={{width:"100%"}} spacing={"xs"} direction={"column"}>
                        <Text lineClamp={1}>{props.name}</Text>
                    </Group>
                    <Text align={"right"} sx={{width:"130px"}} size={"xl"}>
                        {props.percent}%
                    </Text>
                </Group>
                <Space h={"xs"}/>
                <Text size={"xs"} color={"gray"}>{props.description}
                </Text>
            </Spoiler>
        </Card>
    )
}