import React from 'react'

import {
    ActionIcon,
    MediaQuery,
    Group,
    Header as MantineHeader,
    Center,
    useMantineColorScheme,
    UnstyledButton,
    Avatar
} from '@mantine/core'

import {
    CardStackIcon,
    PersonIcon,
    HomeIcon,
    SunIcon,
    MoonIcon
} from '@radix-ui/react-icons'

import { storeCashBacks } from "../../store";
import { ProfileIconHeader } from "./profile-icon-header";

import { Link } from 'react-router-dom'
import { DISPLAY_NONE, PATHS } from '../../misc/paths'

import DarkThemeLogo from './../../assets/consumify-black-theme-logo.svg'
import LightThemeLogo from './../../assets/consumify-white-theme-logo.svg'
import DarkThemeTextLogo from './../../assets/consumify-black-text-logo.svg'
import LightThemeTextLogo from './../../assets/consumify-white-text-logo.svg'


const ICON_SIZE = { height: 20, width: 20 }


export const Header = () => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === 'dark'

    const ThemeButtonIcon = dark ? (<SunIcon/>) : (<MoonIcon/>)

    const onThemeButtonClick = () => toggleColorScheme()
    const onCashbackButtonClick = () => storeCashBacks.setIsOpen(true)


    const MobileView = () =>
        <MantineHeader height={50} fixed={true} position={{ bottom: -1, left: 0, right: 0 }} padding='xs'>
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


    const DesktopView = () =>
        <MantineHeader fixed={true} height={66} padding='xs'>
            <Group grow>
                <Group>
                    <Link to={PATHS.HOME}>
                        <UnstyledButton>
                            <img src={DarkThemeLogo} alt="dark-theme-logo"/>
                            <img src={LightThemeTextLogo} alt="dark-theme-logo"/>
                            {/*<Avatar radius="xl">{DarkThemeLogo}</Avatar>*/}
                        </UnstyledButton>
                    </Link>
                </Group>
                <Group position={"right"}>
                    <ActionIcon
                        size={"lg"}
                        onClick={onThemeButtonClick}
                        title="Toggle color scheme"
                    >
                        {ThemeButtonIcon}
                    </ActionIcon>
                    <ActionIcon onClick={onCashbackButtonClick}>
                        <CardStackIcon style={ICON_SIZE}/>
                    </ActionIcon>
                    <ProfileIconHeader avatarSize={'md'} idSize={'md'}/>
                </Group>
            </Group>
        </MantineHeader>


    return (
        <>
            <MediaQuery smallerThan={"md"} styles={DISPLAY_NONE}>
                <MobileView/>
            </MediaQuery>
            <MediaQuery largerThan={"md"} styles={DISPLAY_NONE}>
                <DesktopView/>
            </MediaQuery>
        </>
    )
}