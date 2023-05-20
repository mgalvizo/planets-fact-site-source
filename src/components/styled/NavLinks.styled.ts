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

    // 620px
    @media only screen and (min-width: 38.75em) {
        position: static;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: var(--website-padding-lg);
        background-color: transparent;
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        gap: var(--website-padding-xlg);
    }
`;

export default StyledMobileNavLinks;
