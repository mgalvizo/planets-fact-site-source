import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

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
                <h1>{title}</h1>
                <p>{message}</p>
            </div>
        </>
    );
};

export default ErrorPage;
