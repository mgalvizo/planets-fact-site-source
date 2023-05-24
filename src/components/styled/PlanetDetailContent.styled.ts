import styled from 'styled-components';

const StyledPlanetDetailContent = styled.main`
    .planet-characteristics {
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        .planet-characteristics {
            border-bottom: 0;
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
    }
`;

export default StyledPlanetDetailContent;
