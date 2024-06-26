import React, { ReactNode, useRef, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    StyledPlanetImageGeology,
    StyledPlanetImage,
    StyledPlanetImageCharacteristic,
} from '../styled/PlanetDetailContent/PlanetImage.styled';
import { getImageByKey } from '../../utils/getImageByKey';

interface PlanetImageProps {
    children?: ReactNode;
    currentPlanetName: string;
    currentCharacteristic: string | undefined;
    images: PlanetImages;
}

interface PlanetImages {
    overviewImgKey: string;
    structureImgKey: string;
    geologyImgKey: string;
}

const PlanetImage = ({
    currentPlanetName,
    currentCharacteristic,
    images,
}: PlanetImageProps) => {
    const { overviewImgKey, structureImgKey, geologyImgKey } = images;
    const nodeRef = useRef(null);
    const [prevPlanetName, setPrevPlanetName] = useState<string | undefined>(
        ''
    );

    useEffect(() => {
        setPrevPlanetName(currentPlanetName.toLowerCase());
    }, [currentPlanetName]);

    let imgKey: string;
    let imgGeologyKey: string;

    if (currentCharacteristic === 'overview') {
        imgKey = overviewImgKey;
        imgGeologyKey = '';
    } else if (currentCharacteristic === 'structure') {
        imgKey = structureImgKey;
        imgGeologyKey = '';
    } else if (currentCharacteristic === 'geology') {
        imgKey = overviewImgKey;
        imgGeologyKey = geologyImgKey;
    } else {
        return <></>;
    }

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={prevPlanetName === currentPlanetName.toLowerCase()}
            timeout={500}
            classNames="fade-in-scale-rotate"
            mountOnEnter
            unmountOnExit
        >
            <StyledPlanetImage
                currentPlanetName={currentPlanetName}
                className={currentPlanetName.toLowerCase()}
                ref={nodeRef}
            >
                <StyledPlanetImageCharacteristic>
                    <img
                        src={getImageByKey(imgKey)}
                        alt={`${currentPlanetName} ${currentCharacteristic}`}
                    />
                </StyledPlanetImageCharacteristic>
                {imgGeologyKey && (
                    <StyledPlanetImageGeology>
                        <img
                            src={getImageByKey(imgGeologyKey)}
                            alt={`${currentPlanetName} ${currentCharacteristic} zoomed`}
                        />
                    </StyledPlanetImageGeology>
                )}
            </StyledPlanetImage>
        </CSSTransition>
    );
};

export default PlanetImage;
