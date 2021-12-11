import { Avatar, Card, Group, Space, Spoiler, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';


export const CardsCashbackPartners = () => {

    const mdScreen = useMediaQuery('(min-width: 992px)');
    
    return (
        <Card radius={'xs'} shadow={'md'}>
            <Spoiler maxHeight={mdScreen ? 200 : 40} showLabel='Полные условия' hideLabel='Скрыть полные условия'>
                <Group noWrap>
                    <Avatar radius={'xl'}>
                        MG
                    </Avatar>
                    <Group sx={{ width: '100%' }} spacing={'xs'} direction={'column'}>
                        <Text lineClamp={1}>Magnit</Text>
                    </Group>
                    <Text align={'right'} sx={{ width: '100px' }} size={'xl'}>
                        5%
                    </Text>
                </Group>
                <Space h={'xs'}/>
                <Text size={'xs'} color={'gray'}>\
                    Лимит кэшбека 3000 рублей в месяц. При совершении
                    более 5 покупок в день - кэшбек на 6 и последующие не начисляется.
                </Text>
            </Spoiler>
        </Card>
    )
    
}