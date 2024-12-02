import React from "react";
import CorralServices from "../../services/CorralServices";
import { useNavigate } from "react-router-dom";


const AgregarCorral = () => {
  const navigate = useNavigate();

  let corral = {
    identificador: "",
  };

  const create = (e) => {
    corral.identificador = document.getElementById("id").value;
    CorralServices.create(corral);
    navigate("/corrales/listado");
  };
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
        onClick={() => create()}
      >
        Agregar
      </button>
    </div>
    </form>
  );
};

export default AgregarCorral;
