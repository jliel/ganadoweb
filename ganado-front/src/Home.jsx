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
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6 d-flex justify-content-center align-content-center text-center flex-wrap">

          <img src="/logo.jpg" alt="" className="home-bg mt-2  mb-2 img-fluid w-25 rounded-5"/>
          <h3 className="m-5 pt-5 text-light">Ofreciendo nuestros servicios desde 1995</h3>
          </div>
          </div>
        </div>
      </main>
      <Footer full={true} />
    </>
  );
};

export default Home;
