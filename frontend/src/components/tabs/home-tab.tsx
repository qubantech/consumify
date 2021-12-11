import TotalRecsBlock from "../home-tab-blocks/total-recs-block";
import CategoriesRecsBlock from "../home-tab-blocks/categories-recs-block";
import {Container, Space, Title} from "@mantine/core";
import {StartAndProfileBlock} from "../home-tab-blocks/start-and-profile-block";
import {useMediaQuery} from "@mantine/hooks";
import PromoCodeBlock from "../home-tab-blocks/promo-code-block";

export const HomeTab = () => {
    const mdscreen = useMediaQuery('(min-width: 992px)');


    return (
        <Container className={"home-tab"} padding='sm' sx={
            (theme) => ({
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: '10px',
                height: '100%',
                '@media (max-width: 768px)': {
                    maxWidth: '760px',
                },
                '@media (max-width: 415px)': {
                    maxWidth: '374px',
                },
                '@media (max-width: 320px)': {
                    maxWidth: '320px',
                },
            })}>
            {!mdscreen && <StartAndProfileBlock/>}
            {/*<MediaQuery largerThan={"md"} styles={DISPLAY_NONE}>
                <StartAndProfileBlock/>
            </MediaQuery>*/}
            <PromoCodeBlock/>
            <TotalRecsBlock/>
            <Space/>
            <CategoriesRecsBlock/>
        </Container>
    )
}