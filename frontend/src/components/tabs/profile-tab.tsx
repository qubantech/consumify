import {
    Container,
    Space,
    useMantineColorScheme
} from "@mantine/core";
import {storeProfile} from "../../store/profile";
import Check from "../profile-tab-blocks/check";
import React from "react";
import {StartAndProfileBlock} from "../home-tab-blocks/start-and-profile-block";

export const ProfileTab = () => {
    const {isFetching, id} = storeProfile;
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <>
            {
                !isFetching &&
                <Container size='sm' padding='sm' sx={
                    (theme) => ({
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: '10px',
                        height: '100%',
                        // backgroundColor: theme.colorScheme === 'dark' ? '' : 'lightgray'
                    })}
                >
                    <StartAndProfileBlock/>
                    <Space/>
                    <Check/>
                    {/*<Grid>*/}
                    {/*    {*/}
                    {/*        checks.map( (check) => {*/}
                    {/*            return (*/}
                    {/*                <Col span={12} xs={12} md={6}></Col>*/}
                    {/*            )*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</Grid>*/}
                </Container>
            }
        </>

    )
}