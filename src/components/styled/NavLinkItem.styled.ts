import styled, { css } from 'styled-components';

interface StyledNavLinkItemProps {
    planetName: string;
}

export const PLANET_COLORS = {
    mercury: '#DEF4FC',
    venus: '#F7CC7F',
    earth: '#545BFE',
    mars: '#FF6A45',
    jupiter: '#ECAD7A',
    saturn: '#FCCB6B',
    uranus: '#65F0D5',
    neptune: '#497EFA',
};

const StyledNavLinkItem = styled.li<StyledNavLinkItemProps>`
    font-size: var(--planet-menu-item-size-sm);
    line-height: var(--planet-menu-item-height-sm);
    letter-spacing: 1px;

    &:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }

    a:link,
    a:visited {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: var(--website-padding-md) var(--website-padding-md)
            var(--website-padding-md) var(--website-padding-xlg2);
        color: var(--white);
        font-weight: bold;

        &:hover {
            text-decoration: none;
        }

        &:before {
            display: block;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            background-color: var(--white);
            border-radius: 50%;
            content: '';
        }
    }

    ${({ planetName }) =>
        planetName &&
        css`
            a:link,
            a:visited {
                &.${planetName} {
                    &:before {
                        background-color: ${PLANET_COLORS[
                            planetName as keyof typeof PLANET_COLORS
                        ]};
                    }
                }
            }
        `}

    // 620px
    @media only screen and (min-width: 38.75em) {
        font-size: var(--planet-menu-item-size-md);
        line-height: var(--planet-menu-item-height-md);

        &:not(:last-child) {
            border-bottom: 0;
        }

        .chevron {
            display: none;
        }

        a:visited,
        a:link {
            color: rgba(255, 255, 255, 0.75);
            padding: 0;
            transition-property: color, box-shadow;
            transition-duration: 0.25s;
            transition-timing-function: ease-in-out;

            &::before {
                content: none;
            }
        }

        ${({ planetName }) =>
            planetName &&
            css`
                a:link,
                a:visited {
                    &.active {
                        color: var(--white);
                        box-shadow: 0 4px 0 0
                            ${PLANET_COLORS[
                                planetName as keyof typeof PLANET_COLORS
                            ]};
                    }
                }
            `}
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        height: inherit;
        font-size: var(--planet-menu-item-size-lg);
        line-height: var(--planet-menu-item-height-lg);

        a:visited,
        a:link {
            height: inherit;
        }

        ${({ planetName }) =>
            planetName &&
            css`
                a:link,
                a:visited {
                    &:hover,
                    &.active {
                        color: var(--white);
                        box-shadow: 0 4px 0 0
                            ${PLANET_COLORS[
                                planetName as keyof typeof PLANET_COLORS
                            ]}
                            inset;
                    }
                }
            `}
    }
`;

export default StyledNavLinkItem;
