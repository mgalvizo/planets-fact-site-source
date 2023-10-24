import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import {
    StyledPlanetButtonItemName,
    StyledPlanetButtonItem,
    StyledPlanetButtonItemNumber,
} from '../styled/PlanetDetailContent/PlanetButtonItem.styled';

interface Characteristic {
    id: number;
    characteristicName: string;
}

interface PlanetButtonItemProps {
    children?: ReactNode;
    characteristic: Characteristic;
    currentPlanetName: string;
}

const PlanetButtonItem = ({
    characteristic,
    currentPlanetName,
}: PlanetButtonItemProps) => {
    const { id, characteristicName } = characteristic;

    return (
        <StyledPlanetButtonItem
            currentPlanetName={currentPlanetName.toLowerCase()}
            characteristicName={characteristicName}
        >
            <NavLink
                className={characteristicName}
                to={`/planets/${currentPlanetName.toLowerCase()}/${characteristicName}`}
            >
                <StyledPlanetButtonItemNumber>{`0${id}`}</StyledPlanetButtonItemNumber>
                <StyledPlanetButtonItemName>
                    {characteristicName.toUpperCase()}
                </StyledPlanetButtonItemName>
            </NavLink>
        </StyledPlanetButtonItem>
    );
};

export default PlanetButtonItem;
