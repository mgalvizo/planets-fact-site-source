import React from 'react';
import { Planet } from '../../pages/PlanetDetailPage';
import StyledPlanetDetailContent from '../styled/PlanetDetailContent.styled';
import { getImageByKey } from '../../utils/getImageByKey';

interface PlanetDetailContentProps {
    planet: Planet;
}

const PlanetDetailContent = ({ planet }: PlanetDetailContentProps) => {
    const { name } = planet;

    const planetImg = name.toLowerCase();
    const planetInternalImg = `${name.toLowerCase()}Internal`;
    const planetGeologyImg = `${name.toLowerCase()}Geology`;

    return (
        <StyledPlanetDetailContent>
            <div className="stripe">
                <div className="stripe__content">
                    <img src={getImageByKey(planetImg)} alt={name} />
                </div>
            </div>
        </StyledPlanetDetailContent>
    );
};

export default PlanetDetailContent;
