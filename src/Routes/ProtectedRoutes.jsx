import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulate authentication status (this should be replaced with a real check)
const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};

// Protected Route Component
export const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/" />;
};

// Restricted Route Component (for Login and Register pages)
export const RestrictedRoute = ({ children }) => {
    return !isAuthenticated() ? children : <Navigate to="/getDataFilled" />;
};
