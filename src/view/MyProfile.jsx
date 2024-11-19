import React from 'react';
import { Routes, Route } from "react-router-dom";
import MyProfileController from '../controller/MyProfileController';
const MyProFileView = ()=>{
    return(
        <MyProfileController/>
    );
};

export default MyProFileView;

// import React from 'react';
// import { Routes, Route,Router } from "react-router-dom";
// import MyProfileController from '../controller/MyProfileController';
// import CertificateView from './CertificateView';
// const MyProFileView = ()=>{
//     return(
//         <Router> <CertificateView /> </Router>
//     );
// };

// export default MyProFileView;