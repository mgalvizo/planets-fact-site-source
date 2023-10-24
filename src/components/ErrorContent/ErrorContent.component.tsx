import React from 'react';
import {
    StyledErrorContent,
    StyledErrorContentStripe,
    StyledErrorContentStripeContent,
} from '../styled/ErrorContent/ErrorContent.styled';

interface ErrorContentProps {
    title: string;
    message: string;
}

const ErrorContent = ({ title, message }: ErrorContentProps) => {
    return (
        <StyledErrorContent>
            <StyledErrorContentStripe>
                <StyledErrorContentStripeContent>
                    <h2>{title}</h2>
                    <p>{message}</p>
                </StyledErrorContentStripeContent>
            </StyledErrorContentStripe>
        </StyledErrorContent>
    );
};

export default ErrorContent;
