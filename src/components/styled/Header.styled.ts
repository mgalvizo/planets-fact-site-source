import styled from 'styled-components';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height-sm);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    background-color: var(--very-dark-blue);

    .component {
        padding-top: var(--website-padding-sm);
        padding-bottom: var(--website-padding-sm);

        .component__content {
            flex-basis: var(--max-design-width);
        }
    }

    .component__content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        position: static;
        top: auto;
        left: auto;
        flex-direction: column;
        height: var(--header-height-md);
        background-color: transparent;

        .component {
            height: 100%;
            padding-top: var(--website-padding-xlg);
            padding-bottom: var(--website-padding-xlg);
        }

        .component__content {
            flex-direction: column;
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        flex-direction: row;
        height: var(--header-height-lg);

        .component {
            padding-top: 0;
            padding-bottom: 0;
        }

        .component__content {
            flex-direction: row;
        }
    }
`;

export default StyledHeader;
