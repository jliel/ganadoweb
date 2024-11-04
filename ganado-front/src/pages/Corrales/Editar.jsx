import React from 'react'
import { useParams } from 'react-router-dom'

const EditarCorral = () => {
  const {id} = useParams()
  return (
    <form className="form-agregar">
      <h2>Editar Corral</h2>
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
        Guardar Cambios
      </button>
    </div>
    </form>
  )
}

export default EditarCorral