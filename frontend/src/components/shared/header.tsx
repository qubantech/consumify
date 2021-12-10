import React from 'react'

import { Link } from 'react-router-dom'
import {DISPLAY_NONE, PATHS} from '../../meta/paths'

import {
    Avatar,
    ActionIcon,
    Button,
    MediaQuery,
    Group,
    Header as MantineHeader,
    Center,
    Text,
    Grid, useMantineColorScheme, UnstyledButton
} from '@mantine/core'
import {
    CardStackIcon,
    PersonIcon,
    HomeIcon,
    FontFamilyIcon,
    FrameIcon,
    SlashIcon,
    SunIcon,
    MoonIcon
} from '@radix-ui/react-icons'
import {storeCashBacks} from "../../store/cashbacks-list";

const ICON_SIZE = {height:20, width:20}

export const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <>
        <MediaQuery largerThan={"md"} styles={DISPLAY_NONE}>
            <MantineHeader height={66} padding='xs'>
                <Group grow>
                    <Group>
                        <Link to={PATHS.HOME}>
                            <UnstyledButton>
                                <Avatar radius="xl">Icon</Avatar>
                            </UnstyledButton>
                        </Link>
                    </Group>
                    <Group position={"right"}>
                        <ActionIcon
                            size={"lg"}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                                {dark ? (
                                    <SunIcon/>
                                ): (
                                    <MoonIcon/>
                                )}
                        </ActionIcon>
                        <ActionIcon onClick={() => storeCashBacks.setIsOpen(true)}>
                            <CardStackIcon style={ICON_SIZE}/>
                        </ActionIcon>
                        <Link to={PATHS.PROFILE}>
                            <UnstyledButton>
                                <Avatar radius="xl">SAS</Avatar>
                            </UnstyledButton>
                        </Link>
                    </Group>
                </Group>
            </MantineHeader>
        </MediaQuery>
        <MediaQuery smallerThan={"md"} styles={DISPLAY_NONE}>
            <MantineHeader height={50} fixed={true} position={{bottom:0, left:0, right:0}} padding='xs'>
                <Group grow>
                    <Link to={PATHS.HOME}>
                        <Center>
                            <ActionIcon size={"lg"}>
                                <HomeIcon style={ICON_SIZE}/>
                            </ActionIcon>
                        </Center>
                    </Link>
                    <Link to={PATHS.PROFILE}>
                        <Center>
                        <ActionIcon size={"lg"}>
                            <PersonIcon style={ICON_SIZE}/>
                        </ActionIcon>
                        </Center>
                    </Link>
                    <Center>
                        <ActionIcon size={"lg"} onClick={() => storeCashBacks.setIsOpen(true)}>
                            <CardStackIcon style={ICON_SIZE}/>
                        </ActionIcon>
                    </Center>
                </Group>
            </MantineHeader>
        </MediaQuery>
        </>
    )
}