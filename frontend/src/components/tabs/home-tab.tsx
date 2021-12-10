import { SunIcon, MoonIcon} from "@radix-ui/react-icons";
import {useMantineColorScheme, ActionIcon, Space, Group} from "@mantine/core";
import CardItem from "../shared/card-item";

export const HomeTab = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <>
            <ActionIcon
                size={"lg"}
                variant="outline"
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
            >
                {dark ? (
                    <SunIcon/>
                ): (
                    <MoonIcon/>
                )}
            </ActionIcon>
            <Group>
                <CardItem id={1} total={10} cashback={3} partner={true} price={1000} name={'Купаты'}/>
                <Space/>
                <CardItem id={2} total={10} cashback={3} partner={true} price={1000} name={'Playstation 5'}/>
                <Space/>
                <CardItem id={3} total={10} cashback={3} partner={true} price={1000} name={'Пиво'}/>
                <Space/>
                <CardItem id={3} total={10} cashback={3} partner={true} price={1000} name={'Пиво'}/>
                <Space/>
                <CardItem id={3} total={10} cashback={3} partner={true} price={1000} name={'Пиво'}/>
            </Group>

        </>
    )
}