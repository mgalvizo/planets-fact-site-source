import styled from 'styled-components';

const StyledNavigation = styled.nav`
    line-height: 1;

    // 620px
    @media only screen and (min-width: 38.75em) {
        width: 100%;
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        width: auto;
    }
`;

export default StyledNavigation;
