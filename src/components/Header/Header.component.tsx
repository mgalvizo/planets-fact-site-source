import React, { ReactNode } from 'react';
import { StyledHeader } from '../styled/Header/Header.styled';

interface HeaderProps {
    children?: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
    return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
