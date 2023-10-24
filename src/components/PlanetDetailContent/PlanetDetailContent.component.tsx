import React from 'react';
import { useParams } from 'react-router-dom';
import { Planet } from '../../pages/PlanetDetailPage';
import {
    StyledPlanetDetailContent,
    StyledPlanetDetailGrid,
    StyledPlanetDetailGridContent,
    StyledPlanetCharacteristicsComponent,
    StyledPlanetCharacteristicsContent,
    StyledPlanetImageComponent,
    StyledPlanetImageContent,
    StyledPlanetInfoComponent,
    StyledPlanetInfoContent,
    StyledPlanetStatsComponent,
    StyledPlanetStatsContent,
} from '../styled/PlanetDetailContent/PlanetDetailContent.styled';
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
            <StyledPlanetDetailGrid>
                <StyledPlanetDetailGridContent>
                    <StyledPlanetCharacteristicsComponent
                        id="planet-characteristics"
                        className="component "
                        as="aside"
                    >
                        <StyledPlanetCharacteristicsContent>
                            <PlanetButtonList currentPlanetName={planetName} />
                        </StyledPlanetCharacteristicsContent>
                    </StyledPlanetCharacteristicsComponent>
                    <StyledPlanetImageComponent id="planet-image">
                        <StyledPlanetImageContent>
                            <PlanetImage
                                currentPlanetName={planetName}
                                currentCharacteristic={characteristic}
                                images={PLANET_IMAGES}
                            />
                        </StyledPlanetImageContent>
                    </StyledPlanetImageComponent>
                    <StyledPlanetInfoComponent id="planet-info" as="section">
                        <StyledPlanetInfoContent>
                            <PlanetInfo
                                currentPlanetName={planetName}
                                currentCharacteristic={characteristic}
                                characteristics={PHYSICAL_CHARACTERISTICS}
                            />
                        </StyledPlanetInfoContent>
                    </StyledPlanetInfoComponent>
                    <StyledPlanetStatsComponent id="planet-stats">
                        <StyledPlanetStatsContent>
                            <PlanetStatsList stats={PLANET_STATS} />
                        </StyledPlanetStatsContent>
                    </StyledPlanetStatsComponent>
                </StyledPlanetDetailGridContent>
            </StyledPlanetDetailGrid>
        </StyledPlanetDetailContent>
    );
};

export default PlanetDetailContent;
