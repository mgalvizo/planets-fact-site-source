import React from 'react';
import { Outlet } from 'react-router-dom';

const PlanetsRootLayout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default PlanetsRootLayout;
