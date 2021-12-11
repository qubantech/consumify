import { storeProfile } from "../../store/profile";
import {Link, useNavigate} from "react-router-dom";
import { PATHS } from "../../misc/paths";
import { Avatar, Group, MantineNumberSize, MantineSize, Text, UnstyledButton } from "@mantine/core";
import React from "react";
import { observer } from "mobx-react-lite";


export const ProfileIconHeader = observer((props: { avatarSize: MantineNumberSize, idSize: MantineSize }) => {
    const navigate = useNavigate()

    const onProfileClick = (destination: string) => {
        return () => navigate(destination)
    }

    return (
        <div>
            {storeProfile.id == 0 ?
                <Link to={PATHS.LOGIN}>
                    <UnstyledButton>
                        <Avatar radius="xl">?</Avatar>
                    </UnstyledButton>
                </Link>
                :
                    <UnstyledButton onClick={onProfileClick('/profile')}>
                        <Group spacing={"xs"}>
                            <Avatar radius="xl" size={props.avatarSize} sx={{
                                backgroundColor: storeProfile.colorID

                            }}>U</Avatar>
                            <Text size={props.idSize}>@ {storeProfile.id}</Text>
                        </Group>
                    </UnstyledButton>
            }
        </div>
    )
})