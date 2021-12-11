import {Container, Group, Avatar, Text, Button, Grid, Col, Space} from "@mantine/core";
import {storeProfile} from "../../store/profile";
import Check from "../profile-tab-blocks/check";

export const ProfileTab = ( ) => {
    const {isFetching, id, checks} = storeProfile;

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
                    <Group position='apart'>
                        <Group spacing='xs'>
                            <Avatar radius='xl'/>
                            <Text>@{ id }</Text>
                        </Group>
                        <Button >Выйти</Button>
                    </Group>
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