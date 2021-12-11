import TotalRecsBlock from "../home-tab-blocks/total-recs-block";
import CategoriesRecsBlock from "../home-tab-blocks/categories-recs-block";
import {Container} from "@mantine/core";
import {StartAndProfileBlock} from "../home-tab-blocks/start-and-profile-block";
import {useMediaQuery} from "@mantine/hooks";

export const HomeTab = () => {
    const mdscreen = useMediaQuery('(min-width: 992px)');

    return (
        <Container size='sm' padding='sm' sx={
            (theme) => ({
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: '10px',
                height: '100%',
                // backgroundColor: theme.colorScheme === 'dark' ? '' : 'lightgray'
            })}>
            {!mdscreen && <StartAndProfileBlock/>}
            {/*<MediaQuery largerThan={"md"} styles={DISPLAY_NONE}>
                <StartAndProfileBlock/>
            </MediaQuery>*/}
            <CategoriesRecsBlock/>
            <TotalRecsBlock/>

            {/*<Group>*/}
            {/*    <CardItem id={1} total={10} cashback={3} partner={true} price={1000} name={'Купаты'}/>*/}
            {/*    <Space/>*/}
            {/*    <CardItem id={2} total={10} cashback={3} partner={true} price={1000} name={'Playstation 5'}/>*/}
            {/*    <Space/>*/}
            {/*    <CardItem id={3} total={10} cashback={3} partner={true} price={1000} name={'Пиво'}/>*/}
            {/*    <Space/>*/}
            {/*    <CardItem id={3} total={10} cashback={3} partner={true} price={1000} name={'Пиво'}/>*/}
            {/*    <Space/>*/}
            {/*    <CardItem id={3} total={10} cashback={3} partner={true} price={1000} name={'Пиво'}/>*/}
            {/*</Group>*/}
        </Container>
    )
}