import React, { ReactNode, MouseEvent } from 'react';
import {
    StyledHamburguerButtonBarOne,
    StyledHamburguerButtonBarTwo,
    StyledHamburguerButtonBarThree,
    StyledHamburguerButton,
} from '../styled/Navigation/HamburguerButton.styled';

export interface HamburguerButtonProps {
    children?: ReactNode;
    onClick: (e: MouseEvent) => void;
    isVisible: boolean;
}

const HamburguerButton = ({ onClick, isVisible }: HamburguerButtonProps) => {
    return (
        <StyledHamburguerButton onClick={onClick} isVisible={isVisible}>
            <span className="visually-hidden">Menu</span>
            <StyledHamburguerButtonBarOne />
            <StyledHamburguerButtonBarTwo />
            <StyledHamburguerButtonBarThree />
        </StyledHamburguerButton>
    );
};

export default HamburguerButton;
