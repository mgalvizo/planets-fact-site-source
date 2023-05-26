import styled from 'styled-components';

const StyledPlanetDetailContent = styled.main`
    padding-top: var(--header-height-sm);
    padding-bottom: var(--website-margin-lg);

    .grid__content {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        row-gap: var(--website-margin-lg);
    }

    .planet-characteristics {
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }

    .planet-image {
        position: relative;
        min-height: 256px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        padding-top: 0;
        padding-bottom: 0;

        .grid__content {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: auto;
            grid-template-areas:
                'plImg plImg plImg plImg plImg plImg plImg plImg plImg plImg plImg plImg'
                'plInf plInf plInf plInf plInf plInf plCha plCha plCha plCha plCha plCha'
                'plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta';
            row-gap: 0;
            column-gap: 0;
        }

        .planet-image {
            margin-top: var(--website-margin-lg);
            margin-bottom: var(--website-margin-xsm);
            grid-area: plImg;
            min-height: 422px;
        }

        .planet-info {
            grid-area: plInf;

            &.component {
                padding-right: var(--website-padding-xsm);
            }
        }

        .planet-characteristics {
            border-bottom: 0;
            grid-area: plCha;
            align-items: center;

            &.component {
                padding-left: calc((var(--website-padding-xlg) * 2) - 2px);
            }
        }

        .planet-stats {
            margin-top: var(--website-margin-lg);
            grid-area: plSta;
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        .grid__content {
            grid-template-areas:
                'plImg plImg plImg plImg plImg plImg plImg plImg plInf plInf plInf plInf'
                'plImg plImg plImg plImg plImg plImg plImg plImg plCha plCha plCha plCha'
                'plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta plSta';
        }

        .planet-image {
            margin-top: calc(var(--website-margin-xlg) * 2);
            margin-bottom: 0;
            grid-area: plImg;
            min-height: 666px;
        }

        .planet-info {
            align-items: end;
            margin-top: 0;
            margin-bottom: var(--website-margin-xlg2);

            &.component {
                padding-right: 0;
                padding-left: var(--website-padding-md);
            }
        }

        .planet-characteristics {
            align-items: start;

            &.component {
                padding-left: 0;
            }
        }

        .planet-stats {
            margin-top: var(--website-margin-md);
        }
    }
`;

export default StyledPlanetDetailContent;
