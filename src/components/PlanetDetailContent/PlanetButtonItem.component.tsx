import React, { ReactNode, MouseEvent } from 'react';
import StyledPlanetButtonItem from '../styled/PlanetButtonItem.styled';

interface Characteristic {
    id: number;
    characteristicName: string;
}

interface PlanetButtonItemProps {
    children?: ReactNode;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    characteristic: Characteristic;
    selectedCharacteristic: string;
    planetName: string;
}

const PlanetButtonItem = ({
    onClick,
    characteristic,
    selectedCharacteristic,
    planetName,
}: PlanetButtonItemProps) => {
    const { id, characteristicName } = characteristic;

    return (
        <StyledPlanetButtonItem
            planetName={planetName.toLowerCase()}
            characteristicName={characteristicName}
        >
            <button
                id={characteristicName}
                onClick={onClick}
                className={`${characteristicName} ${
                    selectedCharacteristic === characteristicName
                        ? 'active'
                        : ''
                }`}
            >
                <span className="number">{`0${id}`}</span>
                <span className="name">{characteristicName.toUpperCase()}</span>
            </button>
        </StyledPlanetButtonItem>
    );
};

export default PlanetButtonItem;
