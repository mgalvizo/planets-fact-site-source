import React, { useState, MouseEvent } from 'react';
import { Planet } from '../../pages/PlanetDetailPage';
import StyledPlanetDetailContent from '../styled/PlanetDetailContent.styled';
import PlanetButtonList from './PlanetButtonList.component';
import PlanetInfo from './PlanetInfo.component';
import PlanetImage from './PlanetImage.component';
import PlanetStatsList from './PlanetStatsList.component';

interface PlanetDetailContentProps {
    planet: Planet;
}

const PlanetDetailContent = ({ planet }: PlanetDetailContentProps) => {
    const [selectedCharacteristic, setSelectedCharacteristic] =
        useState('overview');

    const {
        name: planetName,
        overview,
        structure,
        geology,
        rotation,
        revolution,
        radius,
        temperature,
    } = planet;
    const planetImg = planetName.toLowerCase();
    const planetInternalImg = `${planetName.toLowerCase()}Internal`;
    const planetGeologyImg = `${planetName.toLowerCase()}Geology`;

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const { id } = e.currentTarget;

        setSelectedCharacteristic(id);
    };

    const PHYSICAL_CHARACTERISTICS = {
        planetName,
        overview,
        structure,
        geology,
    };

    const PLANET_IMAGES = {
        planetName,
        overview: planetImg,
        structure: planetInternalImg,
        geology: planetGeologyImg,
    };

    const PLANET_STATS = {
        planetName,
        rotation,
        revolution,
        radius,
        temperature,
    };

    return (
        <StyledPlanetDetailContent>
            <aside className="planet-characteristics">
                <div className="stripe">
                    <div className="stripe__content">
                        <PlanetButtonList
                            onButtonClick={onClickHandler}
                            selectedCharacteristic={selectedCharacteristic}
                            planetName={planetName}
                        />
                    </div>
                </div>
            </aside>
            <div className="planet-image">
                <PlanetImage
                    selectedCharacteristic={selectedCharacteristic}
                    images={PLANET_IMAGES}
                />
            </div>
            <section className="planet-info">
                <PlanetInfo
                    selectedCharacteristic={selectedCharacteristic}
                    characteristics={PHYSICAL_CHARACTERISTICS}
                />
            </section>
            <div className="planet-stats">
                <PlanetStatsList stats={PLANET_STATS} />
            </div>
        </StyledPlanetDetailContent>
    );
};

export default PlanetDetailContent;
