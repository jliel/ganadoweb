import React from "react";

const AgregarPersonal = () => {
  return (
    <form className="form-agregar">
      <h2>Agregar Personal</h2>
      <div className="col">
        <div data-mdb-input-init className="form-outline">
          <input type="text" id="nombre" className="form-control" />
          <label className="form-label" for="nombre">
            Nombre
          </label>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input type="date" id="fecha" className="form-control" />
            <label className="form-label" for="fecha">
              Fecha de ingreso
            </label>
          </div>
        </div>
        <div data-mdb-input-init className="form-outline mb-4 col">
          <input type="text" id="Id Corral" className="form-control" />
          <label className="form-label" for="Id Corral">
            Corral Asignado
          </label>
        </div>
      </div>

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4"
      >
        Agregar
      </button>
    </form>
  );
};

export default AgregarPersonal;
