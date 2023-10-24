import styled from 'styled-components';

const StyledPlanetStatItem = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: var(--website-padding-sm) var(--website-padding-lg);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    height: var(--planet-stat-box-height-sm);

    // 620px
    @media only screen and (min-width: 38.75em) {
        height: var(--planet-stat-box-height-md);
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: var(--website-margin-xsm);
        padding: var(--website-padding-sm) var(--website-padding-md);
        flex-basis: 100%;
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        height: var(--planet-stat-box-height-lg);
        padding: var(--website-padding-md) var(--website-padding-lg);
    }
`;

const StyledPlanetStatItemTitle = styled.h3`
    text-transform: uppercase;
    font-size: var(--planet-stat-title-size-sm);
    line-height: var(--planet-stat-title-height-sm);
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 1px;

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: var(--planet-stat-title-size-md);
        line-height: var(--planet-stat-title-height-md);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        font-size: var(--planet-stat-title-size-lg);
        line-height: var(--planet-stat-title-height-lg);
    }
`;

const StyledPlanetStatItemDescription = styled.p`
    font-family: 'Antonio', sans-serif;
    font-size: var(--planet-stat-desc-size-sm);
    line-height: var(--planet-stat-desc-height-sm);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: -1px;

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: var(--planet-stat-desc-size-md);
        line-height: var(--planet-stat-desc-height-md);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        font-size: var(--planet-stat-desc-size-mdlg);
        line-height: var(--planet-stat-desc-height-mdlg);
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        font-size: var(--planet-stat-desc-size-lg);
        line-height: var(--planet-stat-desc-height-lg);
    }
`;

export {
    StyledPlanetStatItem,
    StyledPlanetStatItemTitle,
    StyledPlanetStatItemDescription,
};
