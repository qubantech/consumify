import { SunIcon, MoonIcon} from "@radix-ui/react-icons";
import {useMantineColorScheme, ActionIcon} from "@mantine/core";

import {observer} from "mobx-react-lite";
import TotalRecsBlock from "../home-tab-blocks/total-recs-block";
import CategoriesRecsBlock from "../home-tab-blocks/categories-recs-block";

export const HomeTab = observer(() => {
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
            <CategoriesRecsBlock/>
            <TotalRecsBlock/>

            {/*<Group>*/}
            {/*    <CardItem id={1} total={10} cashback={3} partner={true} price={1000} name={'Купаты'}/>*/}
            {/*    <Space/>*/}
            {/*    <CardItem id={2} total={10} cashback={3} partner={true} price={1000} name={'Playstation 5'}/>*/}
            {/*    <Space/>*/}
            {/*    <CardItem id={3} total={10} cashback={3} partner={true} price={1000} name={'Пиво'}/>*/}
            {/*    <Space/>*/}
            {/*    <CardItem id={3} total={10} cashback={3} partner={true} price={1000} name={'Пиво'}/>*/}
            {/*    <Space/>*/}
            {/*    <CardItem id={3} total={10} cashback={3} partner={true} price={1000} name={'Пиво'}/>*/}
            {/*</Group>*/}

        </>
    )
});