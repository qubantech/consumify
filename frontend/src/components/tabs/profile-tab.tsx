import React from 'react'

import { Container, Grid, Col, Space, Skeleton } from '@mantine/core'
import { StartAndProfileBlock } from './home-tab-blocks'
import { Check } from './profile-tab-blocks'

import { storeProfile } from '../../store'

export const ProfileTab = () => {

    const { isFetching } = storeProfile

    return (
        <>
            <Container size='sm' padding='sm' sx={
                (theme) => ({
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: '10px',
                    height: '100%',
                })}
            >
                <StartAndProfileBlock/>
                <Space/>
                <Skeleton visible={isFetching}>
                    <Grid>
                        <Col span={12} xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Check/>
                        </Col>
                        <Col span={12} xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Check/>
                        </Col>
                    </Grid>
                </Skeleton>
            </Container>
        </>
    )

}