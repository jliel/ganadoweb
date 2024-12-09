import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonalServices from "../../services/PersonalServices";
import { useNavigate } from "react-router-dom";

const EditarPersonal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setnombre] = useState([]);
  const [fecha, setfecha] = useState([]);
  const [corral, setcorral] = useState([]);

  useEffect(() => {
    PersonalServices.get(id)
      .then((res) => {
        setnombre(res.data.nombre);
        setfecha(res.data.fecha_registro);
        setcorral(res.data.corral);
      })
      .catch((e) => {
        console.log("Error registro no existe.");
      });
  }, []);

  const update = (e) => {
    let personal = {
      nombre: "",
      fecha_registro: "",
      corral: "",
    };

    personal.nombre = document.getElementById("nombre").value;
    personal.fecha_registro = document.getElementById("fecha").value;
    personal.corral = document.getElementById("corral").value;
    PersonalServices.update(id, personal);
    navigate("/personal/listado");
  };

  return (
    <form className="form-agregar">
      <h2>Editar Personal</h2>
      <div className="col">
        <div data-mdb-input-init className="form-outline">
          <input type="text" id="nombre" className="form-control" value={nombre} onChange={(e) => setnombre(e.target.value)}/>
          <label className="form-label" for="nombre">
            Nombre
          </label>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input type="date" id="fecha" className="form-control" value={fecha} onChange={(e) => setfecha(e.target.value)}/>
            <label className="form-label" for="fecha">
              Fecha de ingreso
            </label>
          </div>
        </div>
        <div data-mdb-input-init className="form-outline mb-4 col">
          <input type="text" id="corral" className="form-control" value={corral} onChange={(e) => setcorral(e.target.value)}/>
          <label className="form-label" for="Id Corral">
            Corral Asignado
          </label>
        </div>
      </div>

      <div className="d-flex w-100 gap-3">
      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={() => update()}
      >
        Guardar Cambios
      </button>
      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-danger btn-block mb-4 "
        onClick={() => navigate("/personal/listado")}
      >
        Cancelar
      </button>
      </div>

      
    </form>
  );
};

export default EditarPersonal;
