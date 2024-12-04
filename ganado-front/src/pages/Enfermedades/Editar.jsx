import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EnfermedadServices from "../../services/EnfermedadServices";

const EditarEnfermedad = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const update = (e) => {
    let enfermedad = {
      descripcion: "",
      fecha_registro: "",
      id_ganado: "",
    };
    enfermedad.descripcion = document.getElementById("desc").value;
    enfermedad.fecha_registro = document.getElementById("fecha").value;
    enfermedad.id_ganado = document.getElementById("ganado").value;
    EnfermedadServices.update(id, enfermedad);
    navigate("/enfermedades/listado");
  };
  return (
    <form className="form-agregar">
      <h2>Editar Enfermedad</h2>
      <div className="col">
        <div data-mdb-input-init className="form-outline">
          <input type="text" id="desc" className="form-control" />
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
          <input type="text" id="ganado" className="form-control" />
          <label className="form-label" for="id_ganado">
            Ganado Enfermo
          </label>
        </div>
      </div>

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={() => update()}
      >
        Guardar Cambios
      </button>
    </form>
  );
};

export default EditarEnfermedad;
