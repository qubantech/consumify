import React from 'react';

import { ActionIcon, Button, Group, Space, MediaQuery, useMantineColorScheme } from '@mantine/core';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { observer } from 'mobx-react-lite';

import { ProfileIconHeader } from '../../shared/profile-icon-header';
import { useNavigate } from 'react-router-dom';
import { storeProfile } from '../../../store';
import { DISPLAY_NONE, PATHS } from '../../../misc/paths';
import { useMediaQuery } from "@mantine/hooks";


export const StartAndProfileBlock = observer(() => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const dark = colorScheme === 'dark';

    let navigate = useNavigate();

    const { quitProfile } = storeProfile

    const onQuit = () => {
        return () => {
            quitProfile()
            navigate(PATHS.LOGIN)
            window.location.reload()
        }
    }

    const mobileScreen = useMediaQuery('(max-width: 576px)')

    return (
        <div>
            <Group spacing={'xs'} position={'apart'}>
                <ProfileIconHeader avatarSize={mobileScreen ? 'md' : 'lg'} idSize={'xl'}/>
                <MediaQuery smallerThan={'md'} styles={DISPLAY_NONE}>
                    <ActionIcon
                        size={'lg'}
                        onClick={() => toggleColorScheme()}
                        title='Toggle color scheme'
                    >
                        {dark ? (
                            <SunIcon/>
                        ) : (
                            <MoonIcon/>
                        )}
                    </ActionIcon>
                </MediaQuery>
                <Button onClick={onQuit()} size={'md'} style={{ padding: '5px 20px' }}>Выйти</Button>
            </Group>
            <Space h={'sm'}/>
        </div>
    )
})