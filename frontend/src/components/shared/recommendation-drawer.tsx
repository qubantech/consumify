import React, { useState } from 'react'
import { Anchor, Breadcrumbs, Drawer } from '@mantine/core'
import { getColor } from "../../methods/color-picker";


export const RecommendationDrawer = () => {

    const [ opened, setOpened ] = useState(true)

    return (
        <>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Register"
                padding="xl"
                size="xl"
                transitionDuration={600}
                transitionTimingFunction='ease'
            >
                {/*<div style={{*/}
                {/*    marginTop: '-20px',*/}
                {/*    height: '180px',*/}
                {/*    backgroundColor: getColor(67, 100)*/}
                {/*}}/>*/}

            </Drawer>
        </>
    )
}