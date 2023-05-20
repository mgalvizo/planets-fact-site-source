import React, { ReactNode, MouseEvent } from 'react';
import StyledHamburguerButton from '../styled/HamburguerButton.styled';

export interface HamburguerButtonProps {
    children?: ReactNode;
    onClick: (e: MouseEvent) => void;
    isVisible: boolean;
}

const HamburguerButton = ({ onClick, isVisible }: HamburguerButtonProps) => {
    return (
        <StyledHamburguerButton onClick={onClick} isVisible={isVisible}>
            <span className="visually-hidden">Menu</span>
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
        </StyledHamburguerButton>
    );
};

export default HamburguerButton;
