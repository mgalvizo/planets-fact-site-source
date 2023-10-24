import styled, { css } from 'styled-components';
import { HamburguerButtonProps } from '../../Navigation/HamburguerButton.component';

const StyledHamburguerButtonBar = styled.span`
    background-color: var(--light-gray);
    display: block;
    width: 24px;
    height: 3px;
`;

const StyledHamburguerButtonBarOne = styled(StyledHamburguerButtonBar)``;

const StyledHamburguerButtonBarTwo = styled(StyledHamburguerButtonBar)``;

const StyledHamburguerButtonBarThree = styled(StyledHamburguerButtonBar)``;

const StyledHamburguerButton = styled.button<HamburguerButtonProps>`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--website-margin-xsm);

    &:hover {
        cursor: pointer;
    }

    @keyframes flipBar1 {
        from {
            transform: rotate(0);
            transform-origin: center;
        }
        to {
            // Be careful about the order in which you specify your transformations because it affects the axis of the rotation
            transform: translate(0, 7px) rotate(45deg);
        }
    }

    @keyframes fadeBar2 {
        from {
            transform: scale(1);
            opacity: 1;
        }
        to {
            transform: scale(0);
            opacity: 0;
        }
    }

    @keyframes flipBar3 {
        from {
            transform: rotate(0);
            transform-origin: center;
        }
        to {
            // Be careful about the order in which you specify your transformations because it affects the axis of the rotation
            transform: translate(0, -7px) rotate(-45deg);
        }
    }

    ${({ isVisible }) =>
        isVisible &&
        css`
            ${StyledHamburguerButtonBarOne} {
                animation: flipBar1 0.25s ease-in-out;
                animation-fill-mode: forwards;
            }

            ${StyledHamburguerButtonBarTwo} {
                animation: fadeBar2 0.25s ease-in-out;
                animation-fill-mode: forwards;
            }

            ${StyledHamburguerButtonBarThree} {
                animation: flipBar3 0.25s ease-in-out;
                animation-fill-mode: forwards;
            }
        `}
`;

export {
    StyledHamburguerButtonBar,
    StyledHamburguerButtonBarOne,
    StyledHamburguerButtonBarTwo,
    StyledHamburguerButtonBarThree,
    StyledHamburguerButton,
};

export default StyledHamburguerButton;
