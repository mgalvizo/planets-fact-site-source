import React, { ReactNode } from 'react';
import StyledPlanetButtonList from '../styled/PlanetDetailContent/PlanetButtonList.styled';
import PlanetButtonItem from './PlanetButtonItem.component';

interface PlanetButtonListProps {
    children?: ReactNode;
    currentPlanetName: string;
}

const MAPPING_PHYSICAL_CHARACTERISTICS = [
    {
        id: 1,
        characteristicName: 'overview',
    },
    {
        id: 2,
        characteristicName: 'structure',
    },
    {
        id: 3,
        characteristicName: 'geology',
    },
];

const PlanetButtonList = ({ currentPlanetName }: PlanetButtonListProps) => {
    const linksAsButtons = MAPPING_PHYSICAL_CHARACTERISTICS.map(
        characteristic => {
            const { id } = characteristic;
            return (
                <PlanetButtonItem
                    key={id}
                    characteristic={characteristic}
                    currentPlanetName={currentPlanetName}
                />
            );
        }
    );

    return <StyledPlanetButtonList>{linksAsButtons}</StyledPlanetButtonList>;
};

export default PlanetButtonList;
