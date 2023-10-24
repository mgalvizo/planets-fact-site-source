import React, { ReactNode } from 'react';
import StyledPlanetStatsList from '../styled/PlanetDetailContent/PlanetStatsList.styled';
import PlanetStatItem from './PlanetStatItem.component';

interface PlanetStatsListProps {
    children?: ReactNode;
    stats: PlanetStats;
}

interface PlanetStats {
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
}

const PlanetStatsList = ({ stats }: PlanetStatsListProps) => {
    const { rotation, revolution, radius, temperature } = stats;

    const MAPPING_PLANET_STATS = [
        { id: '1', title: 'Rotation Time', data: rotation },
        { id: '2', title: 'Revolution Time', data: revolution },
        { id: '3', title: 'Radius', data: radius },
        { id: '4', title: 'Average Temp.', data: temperature },
    ];

    const boxes = MAPPING_PLANET_STATS.map(stat => {
        const { id } = stat;
        return (
            <li key={id}>
                <PlanetStatItem stat={stat} />
            </li>
        );
    });

    return <StyledPlanetStatsList>{boxes}</StyledPlanetStatsList>;
};

export default PlanetStatsList;
