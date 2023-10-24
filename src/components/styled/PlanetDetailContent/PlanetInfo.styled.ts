import styled from 'styled-components';

const StyledPlanetInfo = styled.div`
    text-align: center;

    h2 {
        font-size: var(--planet-title-size-sm);
        line-height: var(--planet-title-height-sm);
        font-weight: 500;
        margin-bottom: var(--website-margin-md);
    }

    a:visited,
    a:link {
        text-decoration: underline;
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        text-align: left;

        h2 {
            font-size: var(--planet-title-size-md);
            line-height: var(--planet-title-height-md);
            margin-bottom: var(--website-margin-lg);
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        h2 {
            font-size: var(--planet-title-size-lg);
            line-height: var(--planet-title-height-lg);
        }
    }
`;

const StyledPlanetInfoDescription = styled.p`
    margin-bottom: var(--website-margin-xlg);

    // 1024px
    @media only screen and (min-width: 64em) {
        margin-bottom: var(--website-margin-lg);
    }
`;

const StyledPlanetInfoSource = styled.p`
    color: rgba(255, 255, 255, 0.5);
`;

export {
    StyledPlanetInfo,
    StyledPlanetInfoDescription,
    StyledPlanetInfoSource,
};
