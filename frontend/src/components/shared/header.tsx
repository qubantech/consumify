import React, { ReactElement, useState } from 'react'

import {
    ActionIcon,
    Group,
    Header as MantineHeader,
    Center,
    useMantineColorScheme,
    UnstyledButton,
    Text,
    Image,
    Popover
} from '@mantine/core'

import {
    CardStackIcon,
    PersonIcon,
    HomeIcon,
    SunIcon,
    MoonIcon
} from '@radix-ui/react-icons'

import { storeCashBacks } from '../../store';
import { ProfileIconHeader } from './profile-icon-header';

import { Link } from 'react-router-dom'
import { PATHS } from '../../misc/paths'

import DarkThemeLogo from './../../assets/consumify-black-theme-logo.svg'
import LightThemeLogo from './../../assets/consumify-white-theme-logo.svg'
import DarkThemeTextLogo from './../../assets/consumify-black-text-logo.svg'
import LightThemeTextLogo from './../../assets/consumify-white-text-logo.svg'
import { useMediaQuery } from '@mantine/hooks';


const ICON_SIZE = { height: 20, width: 20 }


export const CustomPopover = (props: { target: ReactElement, text: string, onButtonClick: (e: any) => void }) => {

    const [ opened, setOpened ] = useState(false)

    return (
        <Popover
            opened={opened}
            onClose={() => setOpened(false)}
            position="bottom"
            placement="start"
            withArrow
            noFocusTrap
            noEscape
            transition="pop-top-left"
            styles={{ body: { width: 260, pointerEvents: 'none' } }}
            target={
                <ActionIcon onClick={props.onButtonClick}
                            onMouseEnter={() => setOpened(true)}
                            onMouseLeave={() => setOpened(false)}>
                    {props.target}
                </ActionIcon>
            }>
            <Text size="sm">
                {props.text}
            </Text>
        </Popover>
    );
}


export const Header = () => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === 'dark'

    const ThemeButtonIcon = dark ? (<SunIcon/>) : (<MoonIcon/>)

    const onThemeButtonClick = () => toggleColorScheme()
    const onCashbackButtonClick = () => storeCashBacks.setIsOpen(true)

    const mediumScreen = useMediaQuery('(max-width: 992px)')


    const MobileView = () =>
        <MantineHeader height={50} fixed={true} position={{ bottom: -1, left: 0, right: 0 }} padding='xs'>
            <Group grow>
                <Link to={PATHS.HOME}>
                    <Center>
                        <ActionIcon size={'lg'}>
                            <HomeIcon style={ICON_SIZE}/>
                        </ActionIcon>
                    </Center>
                </Link>
                <Link to={PATHS.PROFILE}>
                    <Center>
                        <ActionIcon size={'lg'}>
                            <PersonIcon style={ICON_SIZE}/>
                        </ActionIcon>
                    </Center>
                </Link>
                <Center>
                    <ActionIcon size={'lg'} onClick={() => storeCashBacks.setIsOpen(true)}>
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
                            <Group spacing='xs'>
                                <Image src={DarkThemeLogo}
                                       alt='dark-theme-logo'
                                       width={37}
                                       height={37}
                                />
                                <Image src={LightThemeTextLogo}
                                       alt='dark-theme-logo'
                                       height={18}
                                />
                            </Group>
                        </UnstyledButton>
                    </Link>
                </Group>
                <Group position={'right'}>
                    <CustomPopover
                        target={ThemeButtonIcon}
                        text={'?????????????? ???????? ????????????????????'}
                        onButtonClick={onThemeButtonClick}/>
                    <CustomPopover
                        target={<CardStackIcon style={ICON_SIZE}/>}
                        text={'?????????????? ?????????????????? ??????????????, ???????????? ???? ??????????????????'}
                        onButtonClick={onCashbackButtonClick}/>
                    <ProfileIconHeader avatarSize={'md'} idSize={'md'}/>
                </Group>
            </Group>
        </MantineHeader>


    return (
        <>
            {
                mediumScreen ? <MobileView/> : <DesktopView/>
            }
        </>
    )
}