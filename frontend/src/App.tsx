import React from 'react'

import { AppShell, MantineTheme } from '@mantine/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/shared'
import { PATHS } from './meta/paths'
import { CatalogTab, HomeTab, ProfileTab } from './components/tabs'


const shellStyle = (theme: MantineTheme) => ({
    main: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
    },
})

const App = () => {

    return (
        <BrowserRouter>
            <AppShell header={<Header/>} styles={shellStyle}>
                <Routes>
                    <Route path={PATHS.HOME} element={<HomeTab/>}/>
                    <Route path={PATHS.CATALOG} element={<CatalogTab/>}/>
                    <Route path={PATHS.PROFILE} element={<ProfileTab/>}/>
                </Routes>
            </AppShell>
        </BrowserRouter>
    )

}

export default App
