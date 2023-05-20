import React from 'react';
import { Planet } from '../../pages/PlanetDetailPage';
import StyledPlanetDetailContent from '../styled/PlanetDetailContent.styled';

interface PlanetDetailContentProps {
    planet: Planet;
}

const PlanetDetailContent = ({ planet }: PlanetDetailContentProps) => {
    const { name } = planet;

    return <StyledPlanetDetailContent>{name}</StyledPlanetDetailContent>;
};

export default PlanetDetailContent;
