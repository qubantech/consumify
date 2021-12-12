import {Container, Grid, Col, Space, useMantineColorScheme, Skeleton} from "@mantine/core";
import {storeProfile} from "../../store/profile";
import CheckItem from "../profile-tab-blocks/checkItem";
import React from "react";
import {StartAndProfileBlock} from "../tabs/home-tab-blocks/start-and-profile-block";
import {storeChecks} from "../../store/check";
import {observer} from "mobx-react-lite";

export const ProfileTab = observer(() => {
    //const {isFetching, id} = storeProfile;
    const {isFetching, items} = storeChecks
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
                    <Grid>
                        {(items || !isFetching) ?
                            items.map((item)=>
                                <Col span={12} xs={12} md={6} style={{display: 'flex', justifyContent: "left"}}>
                                    <CheckItem item={item}/>
                                </Col>)
                            : <Skeleton height={200}/>
                        }
                    </Grid>
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
})