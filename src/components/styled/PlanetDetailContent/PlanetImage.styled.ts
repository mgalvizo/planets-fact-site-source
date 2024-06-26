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

const StyledPlanetImageCharacteristic = styled.figure``;

const StyledPlanetImageGeology = styled.figure`
    img {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 109px;
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        img {
            width: 130px;
            bottom: 36px;
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        img {
            width: 163px;
            bottom: 50px;
        }
    }
`;

const StyledPlanetImage = styled.div<StyledPlanetImageProps>`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    &.fade-in-scale-rotate-enter {
        opacity: 0;
        transform: rotate(90deg) scale(0);
    }

    &.fade-in-scale-rotate-enter-active {
        opacity: 1;
        transform: rotate(0) scale(1);
        transition-property: opacity, transform;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
    }

    &.fade-in-scale-rotate-exit {
        opacity: 1;
        transform: scale(1);
    }

    &.fade-in-scale-rotate-exit-active {
        opacity: 0;
        transform: scale(0);
        transition-property: opacity, transform;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
    }

    ${({ currentPlanetName }) =>
        currentPlanetName &&
        css`
            ${StyledPlanetImageCharacteristic} img {
                width: ${PLANET_IMAGE_WIDTHS[
                    `${currentPlanetName.toLowerCase()}Sm` as keyof typeof PLANET_IMAGE_WIDTHS
                ]};
            }
        `}

    // 620px
    @media only screen and (min-width: 38.75em) {
        ${({ currentPlanetName }) =>
            currentPlanetName &&
            css`
                ${StyledPlanetImageCharacteristic} img {
                    width: ${PLANET_IMAGE_WIDTHS[
                        `${currentPlanetName.toLowerCase()}Md` as keyof typeof PLANET_IMAGE_WIDTHS
                    ]};
                }
            `}
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        ${({ currentPlanetName }) =>
            currentPlanetName &&
            css`
                ${StyledPlanetImageCharacteristic} img {
                    width: ${PLANET_IMAGE_WIDTHS[
                        `${currentPlanetName.toLowerCase()}Lg` as keyof typeof PLANET_IMAGE_WIDTHS
                    ]};
                }
            `}
    }
`;

export {
    StyledPlanetImageGeology,
    StyledPlanetImage,
    StyledPlanetImageCharacteristic,
};
