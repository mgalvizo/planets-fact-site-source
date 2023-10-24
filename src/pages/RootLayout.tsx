import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.component';
import Logo from '../components/Logo/Logo.component';
import Navigation from '../components/Navigation/Navigation.component';
import { StyledRootLayoutContent } from '../components/styled/pages/RootLayout.styled';
import {
    StyledHeaderComponent,
    StyledHeaderComponentContent,
} from '../components/styled/Header.styled';

const RootLayout = () => {
    return (
        <>
            <StyledRootLayoutContent>
                <Header>
                    <StyledHeaderComponent>
                        <StyledHeaderComponentContent>
                            <Logo />
                            <Navigation />
                        </StyledHeaderComponentContent>
                    </StyledHeaderComponent>
                </Header>
                <>
                    <Outlet />
                </>
            </StyledRootLayoutContent>
        </>
    );
};

export default RootLayout;
