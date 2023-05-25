import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const PlanetDetailRootLayout = () => {
    const { planetName } = useParams();

    return <Navigate to={`/planets/${planetName}/overview`} replace />;
};

export default PlanetDetailRootLayout;
