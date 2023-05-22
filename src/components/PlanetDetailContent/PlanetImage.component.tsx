import React, { ReactNode } from 'react';
import StyledPlanetImage from '../styled/PlanetImage.styled';
import { getImageByKey } from '../../utils/getImageByKey';

interface PlanetImageProps {
    children?: ReactNode;
    selectedCharacteristic: string;
    images: PlanetImages;
}

interface PlanetImages {
    planetName: string;
    overview: string;
    structure: string;
    geology: string;
}

const PlanetImage = ({ selectedCharacteristic, images }: PlanetImageProps) => {
    const { planetName, overview, structure, geology } = images;

    let imgKey: string;
    let imgGeologyKey: string;

    if (selectedCharacteristic === 'overview') {
        imgKey = overview;
        imgGeologyKey = '';
    } else if (selectedCharacteristic === 'structure') {
        imgKey = structure;
        imgGeologyKey = '';
    } else {
        imgKey = overview;
        imgGeologyKey = geology;
    }

    return (
        <StyledPlanetImage>
            {!imgGeologyKey && (
                <figure>
                    <img
                        src={getImageByKey(imgKey)}
                        alt={`${planetName} ${selectedCharacteristic}`}
                        loading="lazy"
                    />
                </figure>
            )}

            {imgGeologyKey && (
                <>
                    <figure>
                        <img
                            src={getImageByKey(imgKey)}
                            alt={`${planetName} overview`}
                            loading="lazy"
                        />
                    </figure>
                    <figure>
                        <img
                            src={getImageByKey(imgGeologyKey)}
                            alt={`${planetName} ${selectedCharacteristic}`}
                            loading="lazy"
                        />
                    </figure>
                </>
            )}
        </StyledPlanetImage>
    );
};

export default PlanetImage;
