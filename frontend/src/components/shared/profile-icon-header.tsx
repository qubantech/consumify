import {storeProfile} from "../../store/profile";
import {Link} from "react-router-dom";
import {PATHS} from "../../meta/paths";
import {Avatar, Group, MantineNumberSize, MantineSize, Text, UnstyledButton} from "@mantine/core";
import React from "react";
import {observer} from "mobx-react-lite";

export const ProfileIconHeader = observer((props:{avatarSize: MantineNumberSize, idSize: MantineSize}) => {
    return (
        <div>
        {storeProfile.id == 0 ?
                <Link to={PATHS.LOGIN}>
                    <UnstyledButton>
                        <Avatar radius="xl">?</Avatar>
                    </UnstyledButton>
                </Link>
                :
                <Link to={PATHS.PROFILE}>
                    <UnstyledButton>
                        <Group spacing={"xs"}>
                            <Avatar radius="xl" size={props.avatarSize} sx={{
                                backgroundColor:storeProfile.colorID

                            }}>U</Avatar>
                            <Text size={props.idSize}>@ {storeProfile.id}</Text>
                        </Group>
                    </UnstyledButton>
                </Link>
        }
        </div>
    )
})