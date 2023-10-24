import styled from 'styled-components';

const RootContent = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: hidden;
`;

const Component = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 var(--website-padding-lg);

    // 620px
    @media only screen and (min-width: 38.75em) {
        padding: 0 var(--website-padding-xlg2);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        padding: 0 var(--website-padding-xlg);
    }
`;

const ComponentContent = styled.div`
    flex-basis: var(--max-content-width);
`;

const Grid = styled.div`
    // 620px
    @media only screen and (min-width: 38.75em) {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        padding: 0 var(--website-padding-xlg2) var(--website-margin-xlg);

        ${Component} {
            padding: 0;
        }

        ${ComponentContent} {
            flex-basis: 100%;
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        padding: 0 var(--website-padding-xlg)
            calc(var(--website-margin-xlg) * 2);
    }
`;

const GridContent = styled.div`
    // 620px
    @media only screen and (min-width: 38.75em) {
        flex-basis: var(--max-content-width);
    }
`;

export { RootContent, Component, ComponentContent, Grid, GridContent };
