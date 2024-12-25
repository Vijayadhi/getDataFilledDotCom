import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import RegisterComponent from '../components/RegisterComponent';
import FillDataComponent from '../components/FillDataComponent';
import PrintDataComponent from '../components/PrintDataComponent';
import DownloadDataComponent from '../components/DownloadDataComponent';
import { ProtectedRoute, RestrictedRoute } from './ProtectedRoutes';
import TermsAndConditions from '../components/TermsAndConditions';
import PrivacyPolicy from '../components/PrivacyPolicy';
import FooterComponnet from '../components/FooterComponnet';

const RoutesConfig = ({ formData, setFormData }) => {
    return (
        <>
            <Routes>
                {/* Login and Register pages are restricted for logged-in users */}
                <Route
                    path="/"
                    element={
                        <RestrictedRoute>
                            <LoginComponent />
                        </RestrictedRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute>
                            <RegisterComponent />
                        </RestrictedRoute>
                    }
                />

                {/* Protected routes, only accessible after login */}
                <Route
                    path="/getDataFilled"
                    element={
                        <ProtectedRoute>
                            <FillDataComponent formData={formData} setFormData={setFormData} />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/printData"
                    element={
                        <ProtectedRoute>
                            <PrintDataComponent data={formData} />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/download_data"
                    element={
                        <ProtectedRoute>
                            <DownloadDataComponent data={formData} />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='/termsandconditions'
                    element={
                        <TermsAndConditions />
                    }
                />
                <Route
                    path='/privacyPolicy'
                    element={
                        <PrivacyPolicy />
                    }
                />
            </Routes>
            <hr/>
            <FooterComponnet/>
        </>

    );
};

export default RoutesConfig;
