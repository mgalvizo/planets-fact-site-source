import React, { ReactNode } from 'react';
import StyledPlanetStatItem from '../styled/PlanetStatItem.styled';

interface PlanetStatItemProps {
    children?: ReactNode;
    stat: Stat;
}

interface Stat {
    id: string;
    title: string;
    data: string;
}

const PlanetStatItem = ({ stat }: PlanetStatItemProps) => {
    const { title, data } = stat;
    return (
        <StyledPlanetStatItem>
            <h3>{title}</h3>
            <p>{data}</p>
        </StyledPlanetStatItem>
    );
};

export default PlanetStatItem;
