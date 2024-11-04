import React from "react";

const AgregarCorral = () => {
  return (
    <form className="form-agregar">
      <h2>Agregar Corral</h2>
      <div className="row mb-4">
        <div className="col">
          <div data-mdb-input-init className="inline">
            <label className="form-label" for="id">
              Identificador Corral
            </label>
            <input type="text" id="id" className="form-control" />
          </div>
        </div>
      </div>

    <div className="d-flex w-100">

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4 "
      >
        Agregar
      </button>
    </div>
    </form>
  );
};

export default AgregarCorral;
