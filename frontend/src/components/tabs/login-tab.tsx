import React, { useState } from 'react'

import { Button, Center, Group, Input, Space, Title } from '@mantine/core'
import { RocketIcon } from '@radix-ui/react-icons'

import { storeProfile } from '../../store'
import { useNavigate } from 'react-router-dom'


export const LoginTab = () => {

    const { setID } = storeProfile

    const [ value, setValue ] = useState('')
    let navigate = useNavigate();

    const onEnter = () => {
        return () => {
            setID(Number(value))
            navigate(`/`)
        }
    }

    return (
        <>
            <Center>
                <Group position={'center'} direction={'row'}>
                    <Space h={'md'}/>
                    <Title align={'center'} order={2}>Введите ID для просмотра рекомендаций конкретного
                        пользователя</Title>
                    <Space h={'xl'}/>
                    <Input icon={<RocketIcon/>}
                           placeholder={'Type ID'}
                           value={value}
                           onInput={(e: any) => setValue(e.target.value)}
                    />
                    <Button onClick={onEnter()}>Login</Button>
                </Group>
            </Center>
        </>
    )
}