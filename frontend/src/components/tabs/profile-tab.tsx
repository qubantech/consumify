import React from 'react'

import { Container, Grid, Col, Space, useMantineColorScheme } from '@mantine/core'
import { StartAndProfileBlock } from './home-tab-blocks'
import { Check } from './profile-tab-blocks';

import { storeProfile } from '../../store'

export const ProfileTab = () => {

    const { isFetching, id } = storeProfile;
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
                        <Col span={12} xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Check/>
                        </Col>
                        <Col span={12} xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Check/>
                        </Col>
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
}