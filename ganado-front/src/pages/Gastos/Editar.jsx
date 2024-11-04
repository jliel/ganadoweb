import React from 'react'
import { useParams } from 'react-router-dom'

const EditarGasto = () => {
  const {id} = useParams()
  return (
    <form className="form-agregar">
      <h2>Editar Gasto</h2>
      <div className="col">
        <div data-mdb-input-init className="form-outline">
          <input type="text" id="cantidad" className="form-control" />
          <label className="form-label" for="cantidad">
            Cantidad
          </label>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input type="date" id="fecha" className="form-control" />
            <label className="form-label" for="fecha">
              Fecha de gasto
            </label>
          </div>
        </div>
        <div data-mdb-input-init className="form-outline mb-4 col">
          <input type="text" id="id_personal" className="form-control" />
          <label className="form-label" for="id_personal">
            Personal que autoriza
          </label>
        </div>
      </div>

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4"
      >
        Guardar CAmbios
      </button>
    </form>
  )
}

export default EditarGasto