import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="vh-100 bg-cow">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">

                  //imagen logo, style para hacerlo mas pequeño
                  <h2 className="fw-bold mb-2 text-uppercase">Iniciar Sesion</h2>
                  <p className="text-white-50 mb-5">
                    Ingresa tu usuario y contraseña!
                  </p>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Usuario"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      placeholder="Contraseña"
                    />
                  </div>

                  <Link
                    
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    to={"/"}
                  >
                    Entrar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
