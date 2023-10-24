import React, { MouseEvent, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import StyledNavLinks from '../styled/Navigation/NavLinks.styled';
import NavLinkItem from './NavLinkItem.component';
import PLANETS from '../../dev-data/planets.json';

export interface NavLinksProps {
    onClick?: (e: MouseEvent) => void;
    isVisible?: boolean;
    isSmallScreen?: boolean;
}

const NavLinks = ({ isVisible, isSmallScreen, onClick }: NavLinksProps) => {
    const nodeRef = useRef(null);

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

    return (
        <>
            <CSSTransition
                nodeRef={nodeRef}
                in={isSmallScreen && isVisible}
                timeout={250}
                classNames="slide-in-left"
                mountOnEnter
                unmountOnExit
            >
                <StyledNavLinks ref={nodeRef} isVisible={isVisible}>
                    {links}
                </StyledNavLinks>
            </CSSTransition>
            {!isSmallScreen && <StyledNavLinks>{links}</StyledNavLinks>}
        </>
    );
};

export default NavLinks;
