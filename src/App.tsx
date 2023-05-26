import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

const router = createBrowserRouter(
    [
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
    ],
    {
        basename: '/planets-fact-site',
    }
);

const App = () => {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
