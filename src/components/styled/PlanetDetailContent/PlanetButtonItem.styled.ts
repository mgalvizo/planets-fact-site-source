import styled, { css } from 'styled-components';
import { PLANET_COLORS } from '../Navigation/NavLinkItem.styled';

interface StyledPlanetButtonItemProps {
    currentPlanetName: string;
    characteristicName: string;
}

const StyledPlanetButtonItem = styled.li<StyledPlanetButtonItemProps>`
    height: inherit;

    a:visited,
    a:link {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        height: inherit;
        color: rgba(255, 255, 255, 0.75);
        transition-property: color, box-shadow, background, border;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
        font-size: var(--planet-button-size-sm);
        line-height: var(--planet-button-height-sm);
        letter-spacing: 2px;
        font-weight: bold;

        &:hover {
            text-decoration: none;
        }
    }

    .number {
        display: none;
    }

    ${({ currentPlanetName, characteristicName }) =>
        currentPlanetName &&
        characteristicName &&
        css`
            a:visited,
            a:link {
                &.active {
                    color: var(--white);
                    box-shadow: 0 -4px 0 0 ${PLANET_COLORS[
                            currentPlanetName as keyof typeof PLANET_COLORS
                        ]} inset;
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

        a:link,
        a:visited {
            flex-direction: row;
            gap: var(--website-margin-md);
            justify-content: flex-start;
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

        ${({ currentPlanetName, characteristicName }) =>
            currentPlanetName &&
            characteristicName &&
            css`
                a:link,
                a:visited {
                    &.active {
                        border-color: transparent;
                        background-color: ${PLANET_COLORS[
                            currentPlanetName as keyof typeof PLANET_COLORS
                        ]};

                        &:hover {
                            background-color: ${PLANET_COLORS[
                                currentPlanetName as keyof typeof PLANET_COLORS
                            ]};
                        }
                    }
                }
            `}
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        height: var(--planet-button-item-height-lg);

        a:link,
        a:visited {
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
