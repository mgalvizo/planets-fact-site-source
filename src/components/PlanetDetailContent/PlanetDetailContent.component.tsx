import React from 'react';
import { useParams } from 'react-router-dom';
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
    const { characteristic } = useParams();

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

    const PHYSICAL_CHARACTERISTICS = {
        overview,
        structure,
        geology,
    };

    const PLANET_IMAGES = {
        overviewImgKey: planetImg,
        structureImgKey: planetInternalImg,
        geologyImgKey: planetGeologyImg,
    };

    const PLANET_STATS = {
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
                        <PlanetButtonList currentPlanetName={planetName} />
                    </div>
                </div>
            </aside>
            <div className="planet-image">
                <div className="stripe">
                    <div className="stripe__content">
                        <PlanetImage
                            currentPlanetName={planetName}
                            currentCharacteristic={characteristic}
                            images={PLANET_IMAGES}
                        />
                    </div>
                </div>
            </div>
            <section className="planet-info">
                <div className="stripe">
                    <div className="stripe__content">
                        <PlanetInfo
                            currentPlanetName={planetName}
                            currentCharacteristic={characteristic}
                            characteristics={PHYSICAL_CHARACTERISTICS}
                        />
                    </div>
                </div>
            </section>
            <div className="planet-stats">
                <div className="stripe">
                    <div className="stripe__content">
                        <PlanetStatsList stats={PLANET_STATS} />
                    </div>
                </div>
            </div>
        </StyledPlanetDetailContent>
    );
};

export default PlanetDetailContent;
