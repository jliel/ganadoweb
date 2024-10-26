import React from "react";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faMessage, faMap, faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary fixed-bottom text-muted">
        
        {props.full?
        <>
        <section className="">
          <div className="container text-center text-md-start mt-2">
            <div className="row mt-1">
              <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-2">
                  <FontAwesomeIcon icon={faSquare}></FontAwesomeIcon>Granja "El Charolais"
                </h6>
                <p>Ofreciendo la mejor calidad en ganado vacuno.</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-4 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-2">Servicios</h6>
                <p>
                  Control Ganado Control de Ventas Control de Corrales Control
                  de Personal Control de Gastos Control de Enfermedades
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4 ">
                <h6 className="text-uppercase fw-bold mb-2">Contacto</h6>
                <p>

                   <FontAwesomeIcon icon={faMap}></FontAwesomeIcon> Calle 123
                </p>
                <p>
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> charolais@gmail.com
                </p>
                <p>
                <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon> +52 492 492 4924
                </p>
                <p>
                <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon> +52 492 955 9894
                </p>
              </div>
            </div>
          </div>
        </section>


        <div
          className="text-center p-4"
          //style={{"background-color: rgba(0, 0, 0, 0.05);"}}
        >
          © 2024 Copyright: 
          <Link className="text-reset fw-bold" to={"/"}>
             charolais.com
          </Link>
        </div>
        </>
        : 
        <div
          className="text-center p-4"
          //style={{"background-color: rgba(0, 0, 0, 0.05);"}}
        >
          © 2024 Copyright: 
          <Link className="text-reset fw-bold" to={"/"}>
             charolais.com
          </Link>
        </div>
        }
      </footer>
    </>
  );
};

export default Footer;
