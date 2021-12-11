import {Button, Center, Group, Input, Space, TextInput, Title} from "@mantine/core";
import {RocketIcon} from "@radix-ui/react-icons";
import {storeProfile} from "../../store/profile";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "@mantine/hooks";

export const LoginTab = () => {

    const {setID} = storeProfile

    const [value, setValue] = useState("")
    let navigate = useNavigate();

    const onEnter = () => {
        return () => {
            setID(Number(value))
            navigate(`/`)
        }
    }

    const form = useForm({
        initialValues: {
            id: '',
        },
        validationRules: {
            id: (value) => {return /^\d+$/.test(value)},
        },

    });



    return (
        <>
            <Center>
                <Group position={"center"} direction={"row"}  sx={{alignItems: 'start'}}>
                    <Space h={"md"}/>
                    <Title align={"center"} order={2}>
                        Введите ID для просмотра рекомендаций конкретного пользователя
                    </Title>
                    <Space h={"xl"}/>
                    <TextInput
                        data-autofocus
                        icon={<RocketIcon/>}
                        required
                        placeholder="Type ID"
                        {...form.getInputProps('id')}
                        value = {value}
                        error={form.errors.id && 'ID must include only numbers.'}
                        onBlur={() => form.validateField('id')}
                        onInput = {(e:any) => setValue(e.target.value)}
                    />
                    <Button type="submit" onClick={onEnter()}>Login</Button>

                    {/*<Input icon={<RocketIcon/>}*/}
                    {/*       placeholder={"Type ID"}*/}
                    {/*       value = {value}*/}
                    {/*       onInput = {(e:any) => setValue(e.target.value)}*/}
                    {/*/>*/}
                    {/*<Button onClick={onEnter()}>Login</Button>*/}
                </Group>
            </Center>
        </>
    )
}