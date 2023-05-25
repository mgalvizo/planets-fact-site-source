import React from 'react';
import { Navigate } from 'react-router-dom';

const PlanetsPage = () => {
    return <Navigate to="/planets/mercury/overview" replace />;
};

export default PlanetsPage;
