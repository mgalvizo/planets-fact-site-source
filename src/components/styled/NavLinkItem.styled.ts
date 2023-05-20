import styled, { css } from 'styled-components';
import { NavLinkItemProps } from '../Navigation/NavLinkItem.component';

const PLANET_COLORS = {
    mercury: '#DEF4FC',
    venus: '#F7CC7F',
    earth: '#545BFE',
    mars: '#FF6A45',
    jupiter: '#ECAD7A',
    saturn: '#FCCB6B',
    uranus: '#65F0D5',
    neptune: '#497EFA',
};

const StyledNavLinkItem = styled.li<NavLinkItemProps>`
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
            padding: 0;

            &::before {
                content: none;
            }

            &.active {
                &:before {
                    content: '';
                    top: auto;
                    bottom: 0;
                    border-radius: 0;
                    width: 100%;
                    height: 1px;
                }
            }
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        font-size: var(--planet-menu-item-size-lg);
        line-height: var(--planet-menu-item-height-lg);
    }
`;

export default StyledNavLinkItem;
