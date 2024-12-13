import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        alert('Access Denied! Please log in to access this page.');
        return <Navigate to="/Login" replace />;
    }

    return children;
};

export default ProtectedRoute;
