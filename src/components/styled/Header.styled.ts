import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height-sm);
    padding: var(--website-padding-sm) var(--website-padding-lg);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);

    .stripe__content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
`;

export default StyledHeader;
