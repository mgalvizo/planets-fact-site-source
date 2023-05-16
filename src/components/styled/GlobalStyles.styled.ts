import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --base-font-size: 62.5%;
    --body-font: 'League Spartan', sans-serif;
    --body-font-size: 1.6rem;
    --body-line-height: 1.5;
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
    /* HEADINGS */
    --heading-font: 'Antonio', sans-serif;
    /* SPACING */
    --website-padding-sm: 8px;
    --website-padding-md: 16px;
    --website-padding-lg: 24px;
    --website-padding-xlg: 32px;
    --website-margin-sm: 8px;
    --website-margin-md: 16px;
    --website-margin-lg: 24px;
    --website-margin-xlg: 32px;
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
    font-size: var(--body-font-size);
    line-height: var(--body-line-height);
    overflow-x: hidden;
    font-family: var(--body-font);
    color: var(--white);
}

img {
    width: auto;
    max-width: 100%;
    vertical-align: middle;
}

a:link,
a:visited {
    text-decoration: none;
}

a:link:hover,
a:visited:hover {
    text-decoration: underline;
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
`;

export default GlobalStyle;
