import React from 'react'
import { useParams } from 'react-router-dom'
import PersonalServices from '../../services/PersonalServices'
import { useNavigate } from 'react-router-dom';


const EditarPersonal = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const update = (e) => {
    let personal = {
      "nombre": "",
      "fecha_registro":"",
      "corral":"",
    }
  
    personal.nombre = document.getElementById("nombre").value;
    personal.fecha_registro = document.getElementById("fecha").value;
    personal.corral = document.getElementById("corral").value;
    PersonalServices.update(id, personal)
    navigate("/personal/listado")
  }

  return (
    <form className="form-agregar">
      <h2>Editar Personal</h2>
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
          <input type="text" id="corral" className="form-control" />
          <label className="form-label" for="Id Corral">
            Corral Asignado
          </label>
        </div>
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

export default EditarPersonal