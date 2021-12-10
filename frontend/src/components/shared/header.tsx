import React from 'react'

import { Link } from 'react-router-dom'
import { PATHS } from '../../meta/paths'

import { Button, Group, Header as MantineHeader } from '@mantine/core'
import { FontFamilyIcon, FrameIcon, SlashIcon } from '@radix-ui/react-icons'


export const Header = () => {
    return (
        <MantineHeader height={60} padding='xs'>
            <Group>
                <Link to={PATHS.HOME}>
                    <Button leftIcon={<FrameIcon/>} variant='outline' color='gray'>
                        Home
                    </Button>
                </Link>
                <Link to={PATHS.CATALOG}>
                    <Button leftIcon={<FontFamilyIcon/>} variant='outline' color='gray'>
                        Catalog
                    </Button>
                </Link>
                <Link to={PATHS.PROFILE}>
                    <Button leftIcon={<SlashIcon/>} variant='outline' color='gray'>
                        Profile
                    </Button>
                </Link>
            </Group>
        </MantineHeader>
    )
}