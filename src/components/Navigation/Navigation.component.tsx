import React, { useState, useEffect, useRef } from 'react';
import StyledNavigation from '../styled/Navigation.styled';
import NavLinks from './NavLinks.component';
import HamburguerButton from './HamburguerButton.component';

const Navigation = () => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let isSmallScreen: boolean | undefined;

    if (windowWidth) {
        isSmallScreen = windowWidth < 620;
    }

    // Listener so when the user clicks outside the navigation it also closes
    useEffect(() => {
        // Using global mouse event
        const onBodyClick = (e: MouseEvent) => {
            if (ref.current?.contains(e.target as Node) || !isSmallScreen) {
                return;
            }

            setIsVisible(false);
        };

        document.body.addEventListener('click', onBodyClick, {
            capture: true,
        });

        return () => {
            document.body.removeEventListener('click', onBodyClick, {
                capture: true,
            });
        };
    }, [isSmallScreen]);

    // React Mouse Event
    const onClickHandler = (e: React.MouseEvent) => {
        if (!isSmallScreen) {
            return;
        }

        setIsVisible(!isVisible);
    };

    return (
        <StyledNavigation ref={ref}>
            {isSmallScreen && (
                <HamburguerButton
                    onClick={onClickHandler}
                    isVisible={isVisible}
                />
            )}
            <NavLinks
                isVisible={isVisible}
                isSmallScreen={isSmallScreen}
                onClick={onClickHandler}
            />
        </StyledNavigation>
    );
};

export default Navigation;
