import styled from 'styled-components';

const StyledErrorContent = styled.main`
    text-align: center;

    .stripe {
        padding-top: var(--website-margin-xlg);
        padding-bottom: var(--website-margin-xlg);
    }

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

export default StyledErrorContent;
