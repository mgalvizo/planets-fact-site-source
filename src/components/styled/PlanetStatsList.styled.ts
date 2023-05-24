import styled from 'styled-components';

const StyledPlanetStatsList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: column wrap;
    gap: var(--website-margin-sm);
    width: 100%;

    // 620px
    @media only screen and (min-width: 38.75em) {
        flex-direction: row;
        gap: calc(var(--website-margin-lg) / 2);
        justify-content: space-between;

        li {
            display: flex;
            flex-flow: row wrap;
            flex-basis: calc(25% - calc(var(--website-margin-lg) / 2));
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        gap: var(--website-margin-lg);

        li {
            flex-basis: calc(25% - var(--website-margin-lg));
        }
    }
`;

export default StyledPlanetStatsList;
