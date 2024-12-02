import React from 'react'
import { useParams } from 'react-router-dom'
import corrales from '../../data/corrales'
import { useLocation } from "react-router-dom";
import CorralServices from '../../services/CorralServices';
import { useNavigate } from 'react-router-dom';


const EditarCorral = () => {
  const {id} = useParams()
  const location = useLocation();
  const navigate = useNavigate()

  //const { id } = location.state;
  

  function update(id) {
    let corral = {
      "identificador": "",
    }
  
    corral.identificador = document.getElementById("identi").value;
    CorralServices.update(id, corral)
    navigate("/corrales/listado")
  }
  return (
    <form className="form-agregar">
      <h2>Editar Corral</h2>
      <div className="row mb-4">
        <div className="col">
          <div data-mdb-input-init className="inline">
            <label className="form-label" for="id">
              Identificador Corral
            </label>
            <input type="text" id="identi" className="form-control" />
          </div>
        </div>
      </div>

    <div className="d-flex w-100">

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4 "
        onClick={() => update(id)}
      >
        Guardar Cambios
      </button>
    </div>
    </form>
  )
}

export default EditarCorral