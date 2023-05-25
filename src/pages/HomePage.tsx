import React from 'react';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
    return <Navigate to="/planets/mercury/overview" replace />;
};

export default HomePage;
