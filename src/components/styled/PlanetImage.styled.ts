import styled, { css } from 'styled-components';

interface StyledPlanetImageProps {
    currentPlanetName: string;
}

const PLANET_IMAGE_WIDTHS = {
    mercurySm: '111px',
    mercuryMd: '184px',
    mercuryLg: '290px',
    venusSm: '154px',
    venusMd: '253px',
    venusLg: '400px',
    earthSm: '173px',
    earthMd: '285px',
    earthLg: '450px',
    marsSm: '129px',
    marsMd: '213px',
    marsLg: '336px',
    jupiterSm: '224px',
    jupiterMd: '369px',
    jupiterLg: '582px',
    saturnSm: '256px',
    saturnMd: '422px',
    saturnLg: '666px',
    uranusSm: '176px',
    uranusMd: '290px',
    uranusLg: '458px',
    neptuneSm: '173px',
    neptuneMd: '285px',
    neptuneLg: '450px',
};

const StyledPlanetImage = styled.div<StyledPlanetImageProps>`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    &.fade-in-scale-enter {
        opacity: 0;
        transform: scale(0);
    }

    &.fade-in-scale-enter-active {
        opacity: 1;
        transform: scale(1);
        transition-property: opacity, transform;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }

    &.fade-in-scale-exit {
        opacity: 1;
        transform: scale(1);
    }

    &.fade-in-scale-exit-active {
        opacity: 0;
        transform: scale(0);
        transition-property: opacity, transform;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }

    .characteristic.geology img {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 109px;
    }

    ${({ currentPlanetName }) =>
        currentPlanetName &&
        css`
            .characteristic img {
                width: ${PLANET_IMAGE_WIDTHS[
                    `${currentPlanetName.toLowerCase()}Sm` as keyof typeof PLANET_IMAGE_WIDTHS
                ]};
            }
        `}

    // 620px
    @media only screen and (min-width: 38.75em) {
        .characteristic.geology img {
            width: 130px;
            bottom: 36px;
        }

        ${({ currentPlanetName }) =>
            currentPlanetName &&
            css`
                .characteristic img {
                    width: ${PLANET_IMAGE_WIDTHS[
                        `${currentPlanetName.toLowerCase()}Md` as keyof typeof PLANET_IMAGE_WIDTHS
                    ]};
                }
            `}
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        .characteristic.geology img {
            width: 163px;
            bottom: 50px;
        }

        ${({ currentPlanetName }) =>
            currentPlanetName &&
            css`
                .characteristic img {
                    width: ${PLANET_IMAGE_WIDTHS[
                        `${currentPlanetName.toLowerCase()}Lg` as keyof typeof PLANET_IMAGE_WIDTHS
                    ]};
                }
            `}
    }
`;

export default StyledPlanetImage;
