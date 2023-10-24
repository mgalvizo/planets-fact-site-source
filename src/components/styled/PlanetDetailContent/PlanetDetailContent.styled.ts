import styled from 'styled-components';
import {
    Component,
    ComponentContent,
    Grid,
    GridContent,
} from '../Layout.styled';

const StyledPlanetDetailContent = styled.main`
    padding-top: var(--header-height-sm);
    padding-bottom: var(--website-margin-lg);

    // 620px
    @media only screen and (min-width: 38.75em) {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

const StyledPlanetDetailGrid = styled(Grid)``;

const StyledPlanetDetailGridContent = styled(GridContent)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: var(--website-margin-lg);

    // 620px
    @media only screen and (min-width: 38.75em) {
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto;
        grid-template-areas:
            'plImg plImg plImg plImg plImg plImg plImg plImg plImg plImg plImg plImg'
            'plInf plInf plInf plInf plInf plInf plCha plCha plCha plCha plCha plCha'
            'plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta';
        row-gap: 0;
        column-gap: 0;
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        grid-template-areas:
            'plImg plImg plImg plImg plImg plImg plImg plImg plInf plInf plInf plInf'
            'plImg plImg plImg plImg plImg plImg plImg plImg plCha plCha plCha plCha'
            'plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta';
    }
`;

const StyledPlanetCharacteristicsComponent = styled(Component)`
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);

    // 620px
    @media only screen and (min-width: 38.75em) {
        border-bottom: 0;
        grid-area: plCha;
        align-items: center;
        padding-left: calc((var(--website-padding-xlg) * 2) - 2px);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        align-items: start;
        padding-left: calc(
            var(--website-padding-md) + var(--website-padding-xsm)
        );
    }
`;

const StyledPlanetCharacteristicsContent = styled(ComponentContent)``;

const StyledPlanetImageComponent = styled(Component)`
    position: relative;
    min-height: 256px;
    display: flex;
    justify-content: center;
    align-items: center;

    // 620px
    @media only screen and (min-width: 38.75em) {
        margin-top: var(--website-margin-lg);
        margin-bottom: var(--website-margin-xsm);
        grid-area: plImg;
        min-height: 422px;
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        margin-top: calc(var(--website-margin-xlg) * 2);
        margin-bottom: 0;
        grid-area: plImg;
        min-height: 666px;
    }
`;

const StyledPlanetImageContent = styled(ComponentContent)``;

const StyledPlanetInfoComponent = styled(Component)`
    // 620px
    @media only screen and (min-width: 38.75em) {
        grid-area: plInf;
        padding-right: var(--website-padding-xsm);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        align-items: end;
        margin-top: 0;
        margin-bottom: var(--website-margin-xlg2);
        padding-right: 0;
        padding-left: calc(
            var(--website-padding-md) + var(--website-padding-xsm)
        );
    }
`;

const StyledPlanetInfoContent = styled(ComponentContent)``;

const StyledPlanetStatsComponent = styled(Component)`
    // 620px
    @media only screen and (min-width: 38.75em) {
        margin-top: var(--website-margin-lg);
        grid-area: plSta;
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        margin-top: var(--website-margin-md);
    }
`;

const StyledPlanetStatsContent = styled(ComponentContent)``;

export {
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
};
