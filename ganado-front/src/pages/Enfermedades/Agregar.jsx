import React from "react";

const AgregarEnfermedad = () => {
  return (
    <form className="form-agregar">
      <h2>Agregar Enfermedad</h2>
      <div className="col">
        <div data-mdb-input-init className="form-outline">
          <input type="text" id="descripcion" className="form-control" />
          <label className="form-label" for="descripcion">
            Descripcion
          </label>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input type="date" id="fecha" className="form-control" />
            <label className="form-label" for="fecha">
              Fecha de diagnostico
            </label>
          </div>
        </div>
        <div data-mdb-input-init className="form-outline mb-4 col">
          <input type="text" id="id_ganado" className="form-control" />
          <label className="form-label" for="id_ganado">
            Ganado Enfermo
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

export default AgregarEnfermedad;
