import React, { useState } from 'react'

import { AppShell, MantineTheme, ColorSchemeProvider, ColorScheme, MantineProvider } from '@mantine/core'
import { useColorScheme, useMediaQuery } from "@mantine/hooks";
import { HomeTab, ProfileTab, LoginTab, ModalCashBacks, Header } from './components'

import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'

import { PATHS } from './misc/paths'
import { storeProfile } from "./store";


const shellStyle = (theme: MantineTheme) => ({
    main: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
    },
})


function RequireAuth({ children }: { children: JSX.Element }) {
    const { id } = storeProfile;
    let location = useLocation();

    if (id === 0) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }}/>;
    }

    return children;
}


const App = () => {

    const preferredColorScheme = useColorScheme();
    const [ colorScheme, setColorScheme ] = useState(preferredColorScheme);

    const toggleColorScheme = (value?: ColorScheme) => {
        console.log(colorScheme)
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    }

    const mdScreen = useMediaQuery('(min-width: 992px)');

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                theme={{
                    colorScheme,
                    primaryColor: "grape",
                    spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
                    breakpoints: {
                        xs: 576,
                        sm: 768,
                        md: 992,
                        lg: 1200,
                        xl: 1500,
                    },
                }}>
                <BrowserRouter>
                    <ModalCashBacks/>
                    <AppShell style={{ paddingTop: mdScreen ? 66 : 0, paddingBottom: mdScreen ? 0 : 49 }}
                              header={<Header/>} styles={shellStyle}>
                        <Routes>
                            <Route path={PATHS.LOGIN}
                                   element={<LoginTab/>}/>
                            <Route path={PATHS.HOME}
                                   element={<HomeTab/>}/>
                            <Route path={PATHS.PROFILE}
                                   element={
                                       <RequireAuth>
                                           <ProfileTab/>
                                       </RequireAuth>
                                   }/>
                        </Routes>
                    </AppShell>
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    )

}

export default App
