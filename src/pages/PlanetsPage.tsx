import React from 'react';
import { Navigate } from 'react-router-dom';

const PlanetsPage = () => {
    return <Navigate to="/planets/mercury" replace />;
};

export default PlanetsPage;
