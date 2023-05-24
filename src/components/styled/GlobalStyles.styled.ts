import { createGlobalStyle } from 'styled-components';
import Stars from '../../assets/background-stars.svg';

const GlobalStyle = createGlobalStyle`
:root {
    --max-content-width: 1110px;
    --base-font-size: 62.5%;
    --body-font: 'League Spartan', sans-serif;
    --body-font-size-sm: 1.1rem;
    --body-line-height-sm: 2;
    --body-font-size-md: 1.1rem;
    --body-line-height-md: 2;
    --body-font-size-lg: 1.4rem;
    --body-line-height-lg: 1.75;
    /* COLORS */
    --white: #fff;
    --very-dark-blue: #070724;
    --green: #1EC1A2;
    --blue: #2D68F0;
    --very-dark-gray: #38384F;
    --dark-green: #419EBB;
    --purple: #6D2ED5;
    --gray: #838391;
    --orange: #CD5120;
    --red-orange: #D14C32;
    --red: #D83A34;
    --yellow: #EDA249;
    --light-gray: #979797;
    /* HEADINGS */
    --heading-font: 'Antonio', sans-serif;
    --logo-size: 2.8rem;
    --logo-height: 1.25;
    --planet-title-size-sm: 4rem;
    --planet-title-height-sm: 1.3;
    --planet-title-size-md: 4.8rem;
    --planet-title-height-md: 1.3;
    --planet-title-size-lg: 8rem;
    --planet-title-height-lg: 1.3;
    /* MENU */
    --planet-menu-item-size-sm: 1.5rem;
    --planet-menu-item-height-sm: 1.65;
    --planet-menu-item-size-md: 1.1rem;
    --planet-menu-item-height-md: 2;
    --planet-menu-item-size-lg: 1.1rem;
    --planet-menu-item-height-lg: 2;
    /* BUTTON */
    --planet-button-list-height: 50px;
    --planet-button-item-height-md: 40px;
    --planet-button-item-height-lg: 48px;
    --planet-button-size-sm: .9rem;
    --planet-button-height-sm: 1.1;
    --planet-button-size-md: .9rem;
    --planet-button-height-md: 1.1;
    --planet-button-size-lg: 1.2rem;
    --planet-button-height-lg: 1.2;
    /* HEADER */
    --header-height-sm: 69px;
    --header-height-md: 159px;
    --header-height-lg: 85px;
    /* MISC */
    --planet-stat-box-height-sm: 48px;
    --planet-stat-box-height-md: 88px;
    --planet-stat-box-height-lg: 128px;
    --planet-stat-title-size-sm: .8rem;
    --planet-stat-title-height-sm: 2;
    --planet-stat-title-size-md: .8rem;
    --planet-stat-title-height-md: 2;
    --planet-stat-title-size-lg: 1.1rem;
    --planet-stat-title-height-lg: 2;
    --planet-stat-desc-size-sm: 2rem;
    --planet-stat-desc-height-sm: 1.25;
    --planet-stat-desc-size-md: 2.4rem;
    --planet-stat-desc-height-md: 1.3;
    --planet-stat-desc-size-mdlg: 3.2rem;
    --planet-stat-desc-height-mdlg: 1.3;
    --planet-stat-desc-size-lg: 4rem;
    --planet-stat-desc-height-lg: 1.3;
    /* ERROR */
    --error-title-size: 3.2rem;
    --error-title-height: 1.25;
    --error-text-size: 1.6rem;
    --error-text-height: 1.5;
    /* SPACING */
    --website-padding-sm: 8px;
    --website-padding-md: 16px;
    --website-padding-lg: 24px;
    --website-padding-xlg: 32px;
    --website-padding-xlg2: 40px;
    --website-margin-xsm: 4px;
    --website-margin-sm: 8px;
    --website-margin-md: 16px;
    --website-margin-lg: 24px;
    --website-margin-xlg: 32px;
    --website-margin-xlg2: 40px;
    /* MEDIA */
    --media-min: 20em; /* 320px */
    --media-tablet: 30em; /* 480px */
    --media-tablet-sm-desktop: 38.75em; /* 620px */
    --media-small-desktop: 48em; /* 768px */
    --media-sm-lg-desktop: 56.25em; /* 900px */
    --media-large-desktop: 64em; /* 1024px */
    --large-desktop-max: 77em; /* 1232px */
    --media-max: 90em; /* 1440px */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    border: 0;
}

html {
    width: 100%;
    font-size: var(--base-font-size);
    font-family: sans-serif;
    box-sizing: border-box;
}

body {
    background-color: var(--very-dark-blue);
    background-image: url(${Stars});
    background-repeat: no-repeat;
    background-size: cover;
    font-size: var(--body-font-size-sm);
    line-height: var(--body-line-height-sm);
    overflow-x: hidden;
    font-family: var(--body-font);
    color: var(--white);
}

header,
main, 
section {
    width: 100%;
}

h1,
h2 {
    font-family: var(--heading-font);
    font-weight: 500;
}

img {
    width: auto;
    max-width: 100%;
    vertical-align: middle;
}

a:link,
a:visited {
    font-weight: bold;
    color: var(--white);
    color: rgba(255,255,255, 0.5);
    text-decoration: none;
}

a:link:hover,
a:visited:hover {
    text-decoration: underline;
}

button {
    font-family: inherit;
    color: inherit;
    font-weight: bold;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(1px 1px 1px 1px);
    /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
}

.root__content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: hidden;
}

.stripe {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 var(--website-padding-lg);

    .stripe__content {
        flex-basis: var(--max-content-width);
    }
}

// 620px
@media only screen and (min-width: 38.75em) {
    body {
        font-size: var(--body-font-size-md);
        line-height: var(--body-line-height-md);
    }

    .stripe {
        padding: 0 var(--website-padding-xlg2);
    }
}

// 1024px 
@media only screen and (min-width: 64em) {
    body {
        font-size: var(--body-font-size-lg);
        line-height: var(--body-line-height-lg);
    }

    .stripe {
        padding: 0 var(--website-padding-xlg);
    }
}
`;

export default GlobalStyle;
