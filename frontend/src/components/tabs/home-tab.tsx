import { TotalRecomendationsBlock } from '../home-tab-blocks/total-recomendations-block';
import { CategoriesRecomendationsBlock } from '../home-tab-blocks/categories-recomendations-block';
import { StartAndProfileBlock } from '../home-tab-blocks/start-and-profile-block';
import { PromoCodeBlock } from '../home-tab-blocks/promo-code-block';

import { Container, Space, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';


export const HomeTab = () => {
    
    const mdscreen = useMediaQuery('(min-width: 992px)');
    
    return (
        <Container className={'home-tab'} padding='sm' sx={
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
            })
        }>
            {!mdscreen && <StartAndProfileBlock/>}
            <PromoCodeBlock/>
            <TotalRecomendationsBlock/>
            <Space/>
            <CategoriesRecomendationsBlock/>
        </Container>
    )
}