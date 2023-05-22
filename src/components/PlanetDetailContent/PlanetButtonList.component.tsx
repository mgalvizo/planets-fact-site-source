import React, { ReactNode, MouseEvent } from 'react';
import StyledPlanetButtonList from '../styled/PlanetButtonList.styled';
import PlanetButtonItem from './PlanetButtonItem.component';

interface PlanetButtonListProps {
    children?: ReactNode;
    onButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
    selectedCharacteristic: string;
    planetName: string;
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

const PlanetButtonList = ({
    onButtonClick,
    selectedCharacteristic,
    planetName,
}: PlanetButtonListProps) => {
    const buttons = MAPPING_PHYSICAL_CHARACTERISTICS.map(characteristic => {
        const { id } = characteristic;
        return (
            <PlanetButtonItem
                key={id}
                onClick={onButtonClick}
                characteristic={characteristic}
                selectedCharacteristic={selectedCharacteristic}
                planetName={planetName}
            />
        );
    });

    return <StyledPlanetButtonList>{buttons}</StyledPlanetButtonList>;
};

export default PlanetButtonList;
