import React, { ReactNode, MouseEvent } from 'react';
import StyledPlanetButtonItem from '../styled/PlanetButtonItem.styled';

interface Characteristic {
    id: number;
    name: string;
}

interface PlanetButtonItemProps {
    children?: ReactNode;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    characteristic: Characteristic;
    selectedCharacteristic: string;
}

const PlanetButtonItem = ({
    onClick,
    characteristic,
    selectedCharacteristic,
}: PlanetButtonItemProps) => {
    const { id, name } = characteristic;

    return (
        <StyledPlanetButtonItem
            onClick={onClick}
            id={name}
            className={selectedCharacteristic === name ? 'active' : ''}
        >
            <span className="number">{`0${id}`}</span>
            <span className="name">{name.toUpperCase()}</span>
        </StyledPlanetButtonItem>
    );
};

export default PlanetButtonItem;
