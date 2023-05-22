import styled, { css } from 'styled-components';
import { PLANET_COLORS } from './NavLinkItem.styled';

interface StyledPlanetButtonItemProps {
    planetName: string;
    characteristicName: string;
}

const StyledPlanetButtonItem = styled.li<StyledPlanetButtonItemProps>`
    height: inherit;

    button {
        background-color: transparent;
        height: inherit;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.75);
        transition-property: color, box-shadow;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }

    .number {
        display: none;
    }

    ${({ planetName, characteristicName }) =>
        planetName &&
        characteristicName &&
        css`
            button {
                &.active {
                    color: var(--white);
                    box-shadow: 0 4px 0 0
                        ${PLANET_COLORS[
                            planetName as keyof typeof PLANET_COLORS
                        ]};
                }
            }
        `}

    // 620px
    @media only screen and (min-width: 38.75em) {
    }

    // 1024px
    @media only screen and (min-width: 64em) {
    }
`;

export default StyledPlanetButtonItem;
