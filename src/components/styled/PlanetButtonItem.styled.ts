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
        transition-property: color, box-shadow, background, border;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
        font-size: var(--planet-button-size-sm);
        line-height: var(--planet-button-height-sm);
        letter-spacing: 2px;
        font-weight: bold;
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
        height: var(--planet-button-item-height-md);
        width: 100%;

        .number {
            display: block;
            color: rgba(255, 255, 255, 0.75);
        }

        button {
            display: flex;
            flex-flow: row wrap;
            gap: var(--website-margin-md);
            justify-content: flex-start;
            align-items: center;
            font-size: var(--planet-button-size-md);
            line-height: var(--planet-button-height-md);
            box-shadow: none;
            color: var(--white);
            width: inherit;
            padding: var(--website-padding-sm) var(--website-padding-lg);
            border: 1px solid rgba(255, 255, 255, 0.25);

            &.active {
                box-shadow: none;
            }

            &.structure {
                .name {
                    &::before {
                        content: 'INTERNAL ';
                    }
                }
            }

            &.geology {
                .name {
                    &::before {
                        content: 'SURFACE ';
                    }
                }
            }
        }

        ${({ planetName, characteristicName }) =>
            planetName &&
            characteristicName &&
            css`
                button {
                    &.active {
                        border-color: transparent;
                        background-color: ${PLANET_COLORS[
                            planetName as keyof typeof PLANET_COLORS
                        ]};

                        &:hover {
                            background-color: ${PLANET_COLORS[
                                planetName as keyof typeof PLANET_COLORS
                            ]};
                        }
                    }
                }
            `}
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        height: var(--planet-button-item-height-lg);

        button {
            font-size: var(--planet-button-size-lg);
            line-height: var(--planet-button-height-lg);

            &:hover {
                background-color: rgba(255, 255, 255, 0.25);
                border-color: transparent;
            }
        }
    }
`;

export default StyledPlanetButtonItem;
