import styled from 'styled-components';

const StyledPlanetButtonList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    height: var(--planet-button-list-height);

    // 620px
    @media only screen and (min-width: 38.75em) {
        height: auto;
        flex-direction: column;
        gap: var(--website-margin-md);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
    }
`;

export default StyledPlanetButtonList;
