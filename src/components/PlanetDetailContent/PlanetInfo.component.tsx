import React, { ReactNode } from 'react';
import StyledPlanetInfo from '../styled/PlanetInfo.styled';
import iconSource from '../../assets/icon-source.svg';

interface PlanetInfoProps {
    children?: ReactNode;
    selectedCharacteristic: string;
    characteristics: PhysicalCharacteristics;
}

interface PhysicalCharacteristics {
    planetName: string;
    overview: {
        content: string;
        source: string;
    };
    structure: {
        content: string;
        source: string;
    };
    geology: {
        content: string;
        source: string;
    };
}

const PlanetInfo = ({
    selectedCharacteristic,
    characteristics,
}: PlanetInfoProps) => {
    const { planetName, overview, structure, geology } = characteristics;

    let characteristicDescription;
    let characteristicSource;

    if (selectedCharacteristic === 'overview') {
        characteristicDescription = overview.content;
        characteristicSource = overview.source;
    } else if (selectedCharacteristic === 'structure') {
        characteristicDescription = structure.content;
        characteristicSource = structure.source;
    } else {
        characteristicDescription = geology.content;
        characteristicSource = geology.source;
    }

    return (
        <StyledPlanetInfo>
            <h2>{planetName}</h2>
            <p className="description">{characteristicDescription}</p>
            <p className="source">
                Source:{' '}
                <a href={characteristicSource} target="_blank" rel="noreferrer">
                    Wikipedia <img src={iconSource} alt="source" />
                </a>
            </p>
        </StyledPlanetInfo>
    );
};

export default PlanetInfo;
