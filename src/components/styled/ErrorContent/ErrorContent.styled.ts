import styled from 'styled-components';

const StyledErrorContent = styled.main`
    text-align: center;

    h2 {
        font-size: var(--error-title-size);
        line-height: var(--error-title-height);
        margin-bottom: var(--website-margin-lg);
    }

    p {
        font-size: var(--error-text-size);
        line-height: var(--error-text-height);
    }
`;

const StyledErrorContentStripe = styled.div`
    padding-top: calc(69px + var(--website-margin-xlg));

    // 620px
    @media only screen and (min-width: 38.75em) {
        padding-top: var(--website-margin-xlg);
        padding-bottom: var(--website-margin-xlg);
    }
`;

const StyledErrorContentStripeContent = styled.div``;

export {
    StyledErrorContent,
    StyledErrorContentStripe,
    StyledErrorContentStripeContent,
};
