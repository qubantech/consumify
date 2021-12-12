import React, { useState } from 'react'

import {
    Button,
    Center,
    Checkbox,
    Group,
    Image,
    NumberInput,
    Space,
    Title,
    useMantineTheme
} from '@mantine/core'
import { RocketIcon } from '@radix-ui/react-icons'

import { storeProfile } from '../../store'
import { useNavigate } from 'react-router-dom'
import { useForm, useMediaQuery } from '@mantine/hooks';

import DarkThemeLogo from '../../assets/consumify-black-theme-logo.svg';
import LightThemeTextLogo from '../../assets/consumify-black-text-logo.svg';
import LightThemeLogo from '../../assets/consumify-white-theme-logo.svg';
import DarkThemeTextLogo from '../../assets/consumify-white-text-logo.svg';


export const LoginTab = () => {

    const theme = useMantineTheme()
    const AppLogo = theme.colorScheme === 'dark' ? DarkThemeLogo : LightThemeLogo
    const AppTextLogo = theme.colorScheme === 'dark' ? DarkThemeTextLogo : LightThemeTextLogo

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
        userId: number | string | null,
        termsOfService: boolean,
    }>({
        initialValues: {
            userId: null,
            termsOfService: false,
        },
        validationRules: {
            userId: (value) => value
                ? (typeof value === 'number' && value > 0 && value < 3000)
                : false,
            termsOfService: value => value
        },
        errorMessages: {
            userId: 'Введите ID пользователя в диапазоне от 1 до 3000',
            termsOfService: 'Необходимо принять условия пользовательского соглашения',
        }
    })

    const mediumScreen = useMediaQuery('(min-width: 576px)');


    return (
        <Center>
            <Group position={'center'} direction={'row'} style={{
                marginTop: '4em',
            }}>
                <form onSubmit={form.onSubmit(onEnter)}>
                    <Group position={'center'}>
                        <Image src={AppLogo} style={{height: '8em', width: '8em'}} alt='dark-theme-logo'/>
                        <Image src={AppTextLogo} alt='dark-theme-logo'/>
                    </Group>
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
                        {...form.getInputProps('userId')}
                    />
                    <Space h={'md'}/>
                    <Checkbox
                        label='Принимаю условия использования сервиса'
                        color='grape'
                        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                    />
                    <Space h={'xs'}/>
                    <Button type='submit' disabled={!form.values.termsOfService} fullWidth>
                        Войти
                    </Button>
                </form>
            </Group>
        </Center>
    )
}