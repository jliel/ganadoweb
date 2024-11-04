import React from "react";

const AgregarGanado = () => {
  return (
    <form className="form-agregar">
      <h2>Agregar Ganado</h2>
      <div className="row mb-4">
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input type="text" id="id" className="form-control" />
            <label className="form-label" for="id">
              Identificador
            </label>
          </div>
        </div>
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input type="date" id="fecha" className="form-control" />
            <label className="form-label" for="fecha">
              Fecha de ingreso
            </label>
          </div>
        </div>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input type="text" id="Id Corral" className="form-control" />
        <label className="form-label" for="Id Corral">
          Corral Asignado
        </label>
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

export default AgregarGanado;
