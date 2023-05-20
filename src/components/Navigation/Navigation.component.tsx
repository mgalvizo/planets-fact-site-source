import React, { useState, useEffect, MouseEvent } from 'react';
import StyledNavigation from '../styled/Navigation.styled';
import NavLinks from './NavLinks.component';
import HamburguerButton from './HamburguerButton.component';

const Navigation = () => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    let isSmallScreen;

    if (windowWidth) {
        isSmallScreen = windowWidth < 620;
    }

    const onClickHandler = (e: MouseEvent) => {
        setIsVisible(!isVisible);
    };

    return (
        <StyledNavigation>
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
