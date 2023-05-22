import React, { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavLinkItem from '../styled/NavLinkItem.styled';
import iconChevron from '../../assets/icon-chevron.svg';

export interface NavLinkItemProps {
    planetName: string;
    onClick?: (e: MouseEvent) => void;
}

const NavLinkItem = ({ planetName, onClick }: NavLinkItemProps) => {
    return (
        <StyledNavLinkItem planetName={planetName.toLowerCase()}>
            <NavLink
                to={`planets/${planetName.toLowerCase()}`}
                onClick={onClick}
                className={planetName.toLowerCase()}
            >
                {planetName.toUpperCase()}
                <img
                    className="chevron"
                    src={iconChevron}
                    alt="Chevron"
                    loading="lazy"
                />
            </NavLink>
        </StyledNavLinkItem>
    );
};

export default NavLinkItem;
