import React, { useState } from 'react'

import { Button, Center, Checkbox, Group, Image, NumberInput, Space, Title } from '@mantine/core'
import { RocketIcon } from '@radix-ui/react-icons'

import { storeProfile } from '../../store'
import { useNavigate } from 'react-router-dom'
import { useForm, useMediaQuery } from "@mantine/hooks";
import DarkThemeLogo from "../../assets/consumify-black-theme-logo.svg";
import LightThemeTextLogo from "../../assets/consumify-white-text-logo.svg";


export const LoginTab = () => {

    let navigate = useNavigate()
    const { setID } = storeProfile

    const [ userId, setUserId ] = useState<number | undefined>(undefined)


    const goHome = () => navigate(`/`)

    const onEnter = () => {
        setID(Number(userId))
        goHome()
    }

    const onUserIdInput = (event: any) => setUserId(event.target.value)


    const form = useForm<{
        userId: number | null
    }>({
        initialValues: {
            userId: null,
        },
        validationRules: {
            userId: (value) => value
                ? value > 0 && value < 3000
                : false,
        },
    })

    const mediumScreen = useMediaQuery('(min-width: 576px)');


    return (
        <Center>
            <Group position={'center'} direction={'row'}>
                <form onSubmit={onEnter}>
                    <Image src={LightThemeTextLogo}
                           alt="dark-theme-logo"/>
                    <Space h={'md'}/>
                    <Title align={'center'} order={mediumScreen ? 3 : 5}>
                        Введите ID для просмотра рекомендаций
                    </Title>
                    <Space h={'xl'}/>
                    <NumberInput
                        icon={<RocketIcon/>}
                        placeholder={'Введите ID пользователя'}
                        value={userId}
                        onInput={onUserIdInput}
                        hideControls
                    />
                    <Space h={'md'}/>
                    <Checkbox
                        label="I agree to sell my privacy"
                        color="grape"
                    />
                    <Space h={'xs'}/>
                    <Button onClick={onEnter} fullWidth>
                        Войти
                    </Button>
                </form>
            </Group>
        </Center>
    )
}