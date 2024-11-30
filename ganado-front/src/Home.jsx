import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const Home = () => {
  
  return (
    <>
      <Navbar />
      <main className="flex-shrink-0">
        <div className="container">
          <div className="d-flex justify-content-center alig flex-column text-center">
          <h1 className="mt-5">Bienvenido al Sistema de Control de Granja el Charolais</h1>

          <img src="/logo.jpg" alt="" className="home-bg mt-2 m-auto mb-2"/>
          </div>
        </div>
      </main>
      <Footer full={true} />
    </>
  );
};

export default Home;
