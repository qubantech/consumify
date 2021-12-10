import { SunIcon, MoonIcon} from "@radix-ui/react-icons";
import {useMantineColorScheme, ActionIcon} from "@mantine/core";

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
        </>
    )
}