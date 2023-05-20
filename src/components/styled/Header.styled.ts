import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height-sm);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);

    .stripe {
        padding: var(--website-padding-sm) var(--website-padding-lg);
    }

    .stripe__content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        flex-direction: column;
        height: var(--header-height-md);

        .stripe {
            height: 100%;
            padding: var(--website-padding-xlg) var(--website-padding-xlg2);
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
            padding: var(--website-padding-sm) var(--website-padding-xlg);
        }

        .stripe__content {
            flex-direction: row;
        }
    }
`;

export default StyledHeader;
