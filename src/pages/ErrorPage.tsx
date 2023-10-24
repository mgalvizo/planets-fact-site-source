import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Header from '../components/Header/Header.component';
import Logo from '../components/Logo/Logo.component';
import Navigation from '../components/Navigation/Navigation.component';
import ErrorContent from '../components/ErrorContent/ErrorContent.component';
import { StyledErrorPageContent } from '../components/styled/pages/ErrorPage.styled';
import {
    StyledHeaderComponent,
    StyledHeaderComponentContent,
} from '../components/styled/Header.styled';

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
            <StyledErrorPageContent>
                <Header>
                    <StyledHeaderComponent>
                        <StyledHeaderComponentContent>
                            <Logo />
                            <Navigation />
                        </StyledHeaderComponentContent>
                    </StyledHeaderComponent>
                </Header>
                <ErrorContent title={title} message={message} />
            </StyledErrorPageContent>
        </>
    );
};

export default ErrorPage;
