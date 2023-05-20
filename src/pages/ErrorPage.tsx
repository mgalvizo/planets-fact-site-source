import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Header from '../components/Header/Header.component';
import Logo from '../components/Logo/Logo.component';
import Navigation from '../components/Navigation/Navigation.component';

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'An error occurred.';
    let message = 'Something went wrong.';

    if (isRouteErrorResponse(error)) {
        if (error.status === 500) {
            message = error.data.message;
        }

        if (error.status === 404) {
            title = 'Not Found!';
            message = 'Could not find resource or page.';
        }
    }

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
                <main>
                    <h2>{title}</h2>
                    <p>{message}</p>
                </main>
            </div>
        </>
    );
};

export default ErrorPage;
