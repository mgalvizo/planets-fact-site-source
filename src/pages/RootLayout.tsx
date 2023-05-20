import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.component';
import Logo from '../components/Logo/Logo.component';
import Navigation from '../components/Navigation/Navigation.component';

const RootLayout = () => {
    return (
        <>
            <div className="root__content">
                <Header>
                    <div className="stripe">
                        <div className="stripe__content">
                            <Logo />
                            <Navigation />
                        </div>
                    </div>
                </Header>
                <>
                    <Outlet />
                </>
            </div>
        </>
    );
};

export default RootLayout;
