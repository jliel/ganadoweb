import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GanadoServices from "../../services/GanadoServices";
import { useNavigate } from 'react-router-dom';


const EditarGanado = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [ganado, setganado] = useState([]);

  useEffect(() => {
    GanadoServices
      .get(id)
      .then((res) => {
        setganado(res.data);
      })
      .catch((e) => {
        console.log("Error registro no existe.");
      })
  }, []);

  const update = (e) => {
    let ganado = {
      "identificador": "",
      "fecha_ingreso":"",
      "corral":"",
    }
  
    ganado.identificador = document.getElementById("id").value;
    ganado.fecha_ingreso = document.getElementById("fecha").value;
    ganado.corral = document.getElementById("corral").value;
    GanadoServices.update(id, ganado)
    navigate("/ganado/listado")
  }
  return (
    <form className="form-agregar">
      <h2>Editar Ganado</h2>
      <div className="row mb-4">
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input type="text" id="id" className="form-control" value={ganado.identificador}/>
            <label className="form-label" for="id">
              Identificador
            </label>
          </div>
        </div>
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input type="date" id="fecha" className="form-control" value={ganado.fecha_registro}/>
            <label className="form-label" for="fecha">
              Fecha de ingreso
            </label>
          </div>
        </div>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input type="text" id="corral" className="form-control" value={ganado.corral}/>
        <label className="form-label" for="Id Corral">
          Corral Asignado
        </label>
      </div>

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={()=>update()}
      >
        Guardar Cambios
      </button>
    </form>
  )
}

export default EditarGanado