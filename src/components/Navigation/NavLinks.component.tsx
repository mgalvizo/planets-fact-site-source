import React, { MouseEvent } from 'react';
import StyledNavLinks from '../styled/NavLinks.styled';
import NavLinkItem from './NavLinkItem.component';
import PLANETS from '../../dev-data/planets.json';

export interface NavLinksProps {
    onClick?: (e: MouseEvent) => void;
    isVisible?: boolean;
}

const NavLinks = ({ isVisible, onClick }: NavLinksProps) => {
    const links = PLANETS.map(planet => {
        const { name: planetName } = planet;

        return (
            <NavLinkItem
                key={planetName.toLowerCase()}
                planetName={planetName}
                onClick={onClick}
            />
        );
    });

    return <StyledNavLinks isVisible={isVisible}>{links}</StyledNavLinks>;
};

export default NavLinks;
