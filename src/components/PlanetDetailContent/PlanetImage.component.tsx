import React, { ReactNode } from 'react';
import StyledPlanetImage from '../styled/PlanetImage.styled';
import { getImageByKey } from '../../utils/getImageByKey';

interface PlanetImageProps {
    children?: ReactNode;
    selectedCharacteristic: string;
    images: PlanetImages;
}

interface PlanetImages {
    name: string;
    overview: string;
    structure: string;
    geology: string;
}

const PlanetImage = ({ selectedCharacteristic, images }: PlanetImageProps) => {
    const { name, overview, structure, geology } = images;

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
                        alt={`${name} ${selectedCharacteristic}`}
                        loading="lazy"
                    />
                </figure>
            )}

            {imgGeologyKey && (
                <>
                    <figure>
                        <img
                            src={getImageByKey(imgKey)}
                            alt={`${name} overview`}
                            loading="lazy"
                        />
                    </figure>
                    <figure>
                        <img
                            src={getImageByKey(imgGeologyKey)}
                            alt={`${name} ${selectedCharacteristic}`}
                            loading="lazy"
                        />
                    </figure>
                </>
            )}
        </StyledPlanetImage>
    );
};

export default PlanetImage;
