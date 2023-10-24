import React, { ReactNode } from 'react';
import {
    StyledPlanetStatItem,
    StyledPlanetStatItemTitle,
    StyledPlanetStatItemDescription,
} from '../styled/PlanetDetailContent/PlanetStatItem.styled';

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
            <StyledPlanetStatItemTitle>{title}</StyledPlanetStatItemTitle>
            <StyledPlanetStatItemDescription>
                {data}
            </StyledPlanetStatItemDescription>
        </StyledPlanetStatItem>
    );
};

export default PlanetStatItem;
