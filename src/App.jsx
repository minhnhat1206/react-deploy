import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthView from "./view/AuthView";

import HomePage from "./view/HomePage";
import MyCartView from "./view/MyCartView";
import CartController from "./controller/CartController";
// import CourseContentView from "./view/CourseContentView";
// import LoginView from "./view/LoginView";
// import UserProfile from "./Component/MyProfile"
// import CardControler from "./controller/CardController";
// import MyProFileView from "./view/MyProfile";
// // import ProfileView from "./View/ProfileView";
// import Certificate from "./Component/Certificate/Certificate";
import CertificateView from "./view/CertificateView";
// import CertificateController from "./controller/CertificateController";


// function App() {
//   return (
//     <Router> 
//       <CertificateView /> 
//     </Router>
//   );
// };
// import CourseContentView from "./view/CourseContentView";
// import Login from "./view/LoginView"
// import CardControler from "./controller/CardController";




function App() {
  return (
    <div className="App">
      <CartController />
    </div>

  );
};

export default App;