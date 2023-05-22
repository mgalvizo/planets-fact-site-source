import React, { ReactNode, MouseEvent } from 'react';
import StyledPlanetButtonList from '../styled/PlanetButtonList.styled';
import PlanetButtonItem from './PlanetButtonItem.component';

interface PlanetButtonListProps {
    children?: ReactNode;
    onButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
    selectedCharacteristic: string;
}

const MAPPING_PHYSICAL_CHARACTERISTICS = [
    {
        id: 1,
        name: 'overview',
    },
    {
        id: 2,
        name: 'structure',
    },
    {
        id: 3,
        name: 'geology',
    },
];

const PlanetButtonList = ({
    onButtonClick,
    selectedCharacteristic,
}: PlanetButtonListProps) => {
    const buttons = MAPPING_PHYSICAL_CHARACTERISTICS.map(characteristic => {
        const { id } = characteristic;
        return (
            <li key={id}>
                <PlanetButtonItem
                    onClick={onButtonClick}
                    characteristic={characteristic}
                    selectedCharacteristic={selectedCharacteristic}
                />
            </li>
        );
    });

    return <StyledPlanetButtonList>{buttons}</StyledPlanetButtonList>;
};

export default PlanetButtonList;
