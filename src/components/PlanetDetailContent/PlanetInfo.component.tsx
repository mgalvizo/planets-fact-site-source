import React, { ReactNode } from 'react';
import StyledPlanetInfo from '../styled/PlanetDetailContent/PlanetInfo.styled';
import iconSource from '../../assets/icon-source.svg';

interface PlanetInfoProps {
    children?: ReactNode;
    currentPlanetName: string;
    currentCharacteristic: string | undefined;
    characteristics: PhysicalCharacteristics;
}

interface PhysicalCharacteristics {
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
    currentPlanetName,
    currentCharacteristic,
    characteristics,
}: PlanetInfoProps) => {
    const { overview, structure, geology } = characteristics;

    let characteristicDescription;
    let characteristicSource;

    if (currentCharacteristic === 'overview') {
        characteristicDescription = overview.content;
        characteristicSource = overview.source;
    } else if (currentCharacteristic === 'structure') {
        characteristicDescription = structure.content;
        characteristicSource = structure.source;
    } else if (currentCharacteristic === 'geology') {
        characteristicDescription = geology.content;
        characteristicSource = geology.source;
    } else {
        return <></>;
    }

    return (
        <StyledPlanetInfo>
            <h2>{currentPlanetName}</h2>
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
