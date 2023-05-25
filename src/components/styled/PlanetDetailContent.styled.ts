import styled from 'styled-components';

const StyledPlanetDetailContent = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: var(--website-margin-lg);
    padding-top: var(--header-height-sm);

    .planet-image {
        position: relative;
        min-height: 256px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .planet-characteristics {
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        padding-top: 0;

        .planet-characteristics {
            border-bottom: 0;
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
    }
`;

export default StyledPlanetDetailContent;
