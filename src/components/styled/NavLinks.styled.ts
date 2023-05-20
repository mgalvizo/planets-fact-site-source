import styled from 'styled-components';
import { NavLinksProps } from '../Navigation/NavLinks.component';

const StyledMobileNavLinks = styled.ul<NavLinksProps>`
    position: fixed;
    top: var(--header-height-sm);
    left: 0;
    width: 100%;
    background-color: var(--very-dark-blue);
    padding: var(--website-padding-md) var(--website-padding-lg);
    list-style-type: none;

    &.slide-in-left-enter {
        transform: translateX(-100%);
    }

    &.slide-in-left-enter-active {
        transform: translateX(0);
        transition: transform 0.25s;
    }

    &.slide-in-left-exit {
        transform: translateX(0);
    }

    &.slide-in-left-exit-active {
        transform: translateX(-100%);
        transition: transform 0.25s;
    }
`;

export default StyledMobileNavLinks;
