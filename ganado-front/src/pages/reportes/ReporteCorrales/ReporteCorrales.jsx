import React from 'react'

const ReporteCorrales = () => {
  return (
    <form className="form-agregar">
      <h2>Generar Reporte Corrales</h2>
      <div className="col">
        <div data-mdb-input-init className="form-outline">
          <label className="form-label" for="id_corral">
            Id Corral
          </label>
          <input type="text" id="id_corral" className="form-control mb-3" />
        </div>
      </div>
      

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4"
      >
        Generar Reporte en PDF
      </button>
    </form>
  )
}

export default ReporteCorrales