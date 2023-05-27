import React from 'react';
import {
    createBrowserRouter,
    createHashRouter,
    RouterProvider,
} from 'react-router-dom';
import GlobalStyle from './components/styled/GlobalStyles.styled';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PlanetsRootLayout from './pages/PlanetsRootLayout';
import PlanetsPage from './pages/PlanetsPage';
import PlanetDetailRootLayout from './pages/PlanetDetailRootLayout';
import PlanetDetailPage, {
    loader as planetDetailLoader,
} from './pages/PlanetDetailPage';

// It works in GitHub but only if starting with the base url https://github.com/mgalvizo/planets-fact-site/ and browse via app links from there
// trying to access https://github.com/mgalvizo/planets-fact-site/planets/mercury/overview will cause 404
// const router = createBrowserRouter(
//     [
//         {
//             path: '/',
//             element: <RootLayout />,
//             errorElement: <ErrorPage />,
//             children: [
//                 { index: true, element: <HomePage /> },
//                 {
//                     path: 'planets',
//                     element: <PlanetsRootLayout />,
//                     children: [
//                         { index: true, element: <PlanetsPage /> },
//                         {
//                             path: ':planetName',
//                             children: [
//                                 {
//                                     index: true,
//                                     element: <PlanetDetailRootLayout />,
//                                 },
//                                 {
//                                     path: ':characteristic',
//                                     children: [
//                                         {
//                                             index: true,
//                                             loader: planetDetailLoader,
//                                             id: 'planet-detail',
//                                             element: <PlanetDetailPage />,
//                                         },
//                                     ],
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//             ],
//         },
//     ],
//     {
//         basename: '/planets-fact-site',
//     }
// );

// This works properly but adds an #, we have to use this since we can setup Github to always serve index.html for all routes
const router = createHashRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'planets',
                element: <PlanetsRootLayout />,
                children: [
                    { index: true, element: <PlanetsPage /> },
                    {
                        path: ':planetName',
                        children: [
                            {
                                index: true,
                                element: <PlanetDetailRootLayout />,
                            },
                            {
                                path: ':characteristic',
                                children: [
                                    {
                                        index: true,
                                        loader: planetDetailLoader,
                                        id: 'planet-detail',
                                        element: <PlanetDetailPage />,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

const App = () => {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
