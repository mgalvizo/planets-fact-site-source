import styled from 'styled-components';
import { NavLinksProps } from '../Navigation/NavLinks.component';

const StyledNavLinks = styled.ul<NavLinksProps>`
    position: fixed;
    top: var(--header-height-sm);
    left: 0;
    width: 100%;
    background-color: var(--very-dark-blue);
    padding: var(--website-padding-md) var(--website-padding-lg);
    list-style-type: none;
`;

export default StyledNavLinks;
