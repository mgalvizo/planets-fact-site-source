import React from 'react';
import { Navigate } from 'react-router-dom';

const PlanetsPage = () => {
    return <Navigate to="/planets/earth/overview" replace />;
};

export default PlanetsPage;
