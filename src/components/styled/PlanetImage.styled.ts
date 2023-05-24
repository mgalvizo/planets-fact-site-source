import styled, { createGlobalStyle, css } from 'styled-components';

interface StyledPlanetImageProps {
    planetName: string;
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
    text-align: center;

    ${({ planetName }) =>
        planetName &&
        css`
            &.${planetName.toLowerCase()} {
                img {
                    width: ${PLANET_IMAGE_WIDTHS[
                        `${planetName.toLowerCase()}Sm` as keyof typeof PLANET_IMAGE_WIDTHS
                    ]};
                }
            }
        `}

    // 620px
    @media only screen and (min-width: 38.75em) {
        ${({ planetName }) =>
            planetName &&
            css`
                &.${planetName.toLowerCase()} {
                    img {
                        width: ${PLANET_IMAGE_WIDTHS[
                            `${planetName.toLowerCase()}Md` as keyof typeof PLANET_IMAGE_WIDTHS
                        ]};
                    }
                }
            `}
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        ${({ planetName }) =>
            planetName &&
            css`
                &.${planetName.toLowerCase()} {
                    img {
                        width: ${PLANET_IMAGE_WIDTHS[
                            `${planetName.toLowerCase()}Lg` as keyof typeof PLANET_IMAGE_WIDTHS
                        ]};
                    }
                }
            `}
    }
`;

export default StyledPlanetImage;
