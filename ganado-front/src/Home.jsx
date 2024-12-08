import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";


const Home = () => {
  
  return (
    <>
      <Navbar />
      <main className="flex-shrink-0">
        <div className="container1">      
         <div className="d-flex justify-content-center alig flex-column text-center">
          <h1 className="mt-5">Bienvenido al Sistema de Control de Granja el Charolais</h1>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6 d-flex justify-content-center align-content-center text-center">

          <img src="/logo.jpg" alt="" className="home-bg mt-2 m-auto mb-2 img-fluid w-25"/>
          </div>
          </div>
        </div>
      </main>
      <Footer full={true} />
    </>
  );
};

export default Home;
