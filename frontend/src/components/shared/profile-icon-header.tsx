import { storeProfile } from '../../store';
import {Link, useNavigate} from 'react-router-dom';
import { PATHS } from '../../misc/paths';
import {
    ActionIcon,
    Avatar,
    Group,
    MantineNumberSize,
    MantineSize,
    Popover,
    Text,
    UnstyledButton
} from '@mantine/core';
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';


export const ProfileIconHeader = observer((props: { avatarSize: MantineNumberSize, idSize: MantineSize }) => {

    const navigate = useNavigate()

    const [ opened, setOpened ] = useState(false)

    const onProfileClick = (destination: string) => {
        return () => navigate(destination)
    }

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
                <div onMouseEnter={() => setOpened(true)}
                     onMouseLeave={() => setOpened(false)}>
                    {storeProfile.id == 0 ?
                        <Link to={PATHS.LOGIN}>
                            <UnstyledButton>
                                <Avatar radius='xl'>?</Avatar>
                            </UnstyledButton>
                        </Link>
                        :
                        <UnstyledButton onClick={onProfileClick('/profile')}>
                            <Group spacing={'xs'}>
                                <Avatar radius='xl' size={props.avatarSize} sx={{
                                    backgroundColor: storeProfile.colorID

                                }}>U</Avatar>
                                <Text size={props.idSize}>@ {storeProfile.id}</Text>
                            </Group>
                        </UnstyledButton>
                    }
                </div>
            }>
            <Text size="sm">
                Профиль пользователя
            </Text>
        </Popover>
    )
})