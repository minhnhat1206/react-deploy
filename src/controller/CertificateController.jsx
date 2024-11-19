import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarProfile from '../Component/NavbarProfile';
import { NavbarProfileModel } from '../model/NavbarProfileModel';
import Certificate from '../Component/Certificate';
import { certificates } from "../model/CertificateModel";  
import { useParams } from 'react-router-dom';

const CertificateController = () => {
    const { id } = useParams();  // Lấy tham số id từ URL
    const certificate = certificates.find((certificate) => certificate.id === parseInt(id)); 

    if (!certificate) {
      return <p>Certificate not found</p>; 
    }

    return (
        <Certificate 
        name={certificate.name}
        course={certificate.title}
        />
    );
};

export default CertificateController;
