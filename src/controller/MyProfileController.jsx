import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import React Icons
import BuyingCard from "../Component/BuyingCard";
import { course as initialCourses } from "../model/CartModel";  
import MyProFile from "../Component/MyProfile"
import ProfileCertificate from "../Component/ProfileCertificate";
import { useNavigate } from 'react-router-dom';
const MyProfileController = () => {

  // Quản lý state
  const [cartCourses, setCartCourses] = useState(initialCourses);
  const navigate = useNavigate();


  const filteredCourses = cartCourses.filter((course) => course.status == "Done");
  
  const handleCertificateClick = (courseTitle, userName, courseId) => {
    navigate(`/my-profile/Certificate/${courseId}`); 
  };

  const [userData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Learning Street, Education City, EC 12345",
    birthDate: "1990-05-15",
    avatar: "images.unsplash.com/photo-1494790108377-be9c29b29330"
  });
  return (
    <MyProFile
    courses={filteredCourses}
    userData={userData} 
    onCertificateClick={handleCertificateClick}
  />
  );
};
export default MyProfileController;
