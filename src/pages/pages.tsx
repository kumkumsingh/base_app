import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import ErrorBoundary from '../utils/ErrorBoundary';
import PageNotFound from '../components/PageNotFound';
import SpeciesListPage from './SpeciesListPage'
import React from 'react';

const Pages = () => {

    return (
        <ErrorBoundary>
                    <BrowserRouter>
                        <Routes>
                            <Route path={routes.HOME} element={<SpeciesListPage />} />
                            {/* Page not found error for routes other than / or /species/:id route*/}
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </BrowserRouter>
        </ErrorBoundary>
    );
};

export default Pages;