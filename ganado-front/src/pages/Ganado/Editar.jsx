import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GanadoServices from "../../services/GanadoServices";
import { useNavigate } from 'react-router-dom';


const EditarGanado = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [ident, setident] = useState([]);
  const [fecha, setfecha] = useState([]);
  const [corral, setcorral] = useState([]);

  useEffect(() => {
    GanadoServices
      .get(id)
      .then((res) => {
        setident(res.data.identificador)
        setfecha(res.data.fecha_registro)
        setcorral(res.data.corral)
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
            <input type="text" id="id" className="form-control" value={ident} onChange={(e) => setident(e.target.value)}/>
            <label className="form-label" for="id">
              Identificador
            </label>
          </div>
        </div>
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input type="date" id="fecha" className="form-control" value={fecha} onChange={(e) => setfecha(e.target.value)}/>
            <label className="form-label" for="fecha">
              Fecha de ingreso
            </label>
          </div>
        </div>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input type="text" id="corral" className="form-control" value={corral} onChange={(e) => setcorral(e.target.value)}/>
        <label className="form-label" for="Id Corral">
          Corral Asignado
        </label>
      </div>

      <div className="d-flex w-100 gap-3">
      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={()=>update()}
      >
        Guardar Cambios
      </button>
      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-danger btn-block mb-4 "
        onClick={() => navigate("/ganado/listado")}
      >
        Cancelar
      </button>
      </div>
    </form>
  )
}

export default EditarGanado