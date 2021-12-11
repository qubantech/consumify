import { TotalRecommendationsBlock } from './home-tab-blocks';
import { CategoriesRecommendationsBlock } from './home-tab-blocks';
import { StartAndProfileBlock } from './home-tab-blocks';
import { PromoCodeBlock } from './home-tab-blocks';

import { Container, Space } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';


export const HomeTab = () => {
    
    const mdScreen = useMediaQuery('(min-width: 992px)');
    
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
            {!mdScreen && <StartAndProfileBlock/>}
            <PromoCodeBlock/>
            <TotalRecommendationsBlock/>
            <Space/>
            <CategoriesRecommendationsBlock/>
        </Container>
    )
}