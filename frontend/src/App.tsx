import React, {useState} from 'react'

import {AppShell, MantineTheme, ColorSchemeProvider, ColorScheme, MantineProvider} from '@mantine/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/shared'
import { PATHS } from './meta/paths'
import { CatalogTab, HomeTab, ProfileTab } from './components/tabs'
import {useColorScheme} from "@mantine/hooks";


const shellStyle = (theme: MantineTheme) => ({
    main: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
    },
})

const App = () => {
    const preferredColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useState(preferredColorScheme);
    const toggleColorScheme = (value?: ColorScheme) => {
        console.log(colorScheme)
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                theme={{
                    colorScheme,
                    spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
                    breakpoints: {
                        xs: 576,
                        sm: 768,
                        md: 992,
                        lg: 1200,
                        xl: 1400,
                    },
                }}>
                <BrowserRouter>
                    <AppShell header={<Header/>} styles={shellStyle}>
                        <Routes>
                            <Route path={PATHS.HOME} element={<HomeTab/>}/>
                            {/*<Route path={PATHS.CATALOG} element={<CatalogTab/>}/>*/}
                            <Route path={PATHS.PROFILE} element={<ProfileTab/>}/>
                        </Routes>
                    </AppShell>
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    )

}

export default App
