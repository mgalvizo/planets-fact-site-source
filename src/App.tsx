import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './components/styled/GlobalStyles.styled';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PlanetsRootLayout from './pages/PlanetsRootLayout';
import PlanetsPage from './pages/PlanetsPage';
import PlanetDetailPage, {
    loader as planetDetailLoader,
} from './pages/PlanetDetailPage';

const router = createBrowserRouter([
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
                        path: ':name',
                        loader: planetDetailLoader,
                        id: 'planet-detail',
                        children: [
                            { index: true, element: <PlanetDetailPage /> },
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
