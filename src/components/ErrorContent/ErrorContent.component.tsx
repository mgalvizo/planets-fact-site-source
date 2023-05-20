import React from 'react';
import StyledErrorContent from '../styled/ErrorContent.styled';

interface ErrorContentProps {
    title: string;
    message: string;
}

const ErrorContent = ({ title, message }: ErrorContentProps) => {
    return (
        <StyledErrorContent>
            <div className="stripe">
                <div className="stripe__content">
                    <h2>{title}</h2>
                    <p>{message}</p>
                </div>
            </div>
        </StyledErrorContent>
    );
};

export default ErrorContent;
