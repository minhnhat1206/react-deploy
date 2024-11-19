import React from 'react';
import { useRoutes } from "react-router-dom";
import CertificateController from '../controller/CertificateController';
import MyProfileController from '../controller/MyProfileController';

const CertificateView = () => {
    const routes = useRoutes([
        { path: 'my-profile', element: <MyProfileController /> },
        { path: '/my-profile/Certificate/:id', element: <CertificateController /> }
    ]);
    return routes;
};

export default CertificateView;
