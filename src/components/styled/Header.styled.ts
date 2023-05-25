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

    .stripe {
        padding-top: var(--website-padding-sm);
        padding-bottom: var(--website-padding-sm);
    }

    .stripe__content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        flex-basis: 100%;
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        position: static;
        top: auto;
        left: auto;
        flex-direction: column;
        height: var(--header-height-md);
        background-color: transparent;

        .stripe {
            height: 100%;
            padding-top: var(--website-padding-xlg);
            padding-bottom: var(--website-padding-xlg);
        }

        .stripe__content {
            flex-direction: column;
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        flex-direction: row;
        height: var(--header-height-lg);

        .stripe {
            padding-top: 0;
            padding-bottom: 0;
        }

        .stripe__content {
            flex-direction: row;
        }
    }
`;

export default StyledHeader;
