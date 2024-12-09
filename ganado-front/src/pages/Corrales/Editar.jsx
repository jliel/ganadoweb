import React, { useEffect, useState } from 'react'
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
  const [ident, setident] = useState([]);

  useEffect(() => {
    CorralServices
      .get(id)
      .then((res) => {
        setident(res.data.identificador)
      })
      .catch((e) => {
        console.log("Error registro no existe.");
      })
  }, []);
  

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
            <input type="text" id="identi" className="form-control" value={ident} onChange={(e) => setident(e.target.value)}/>
          </div>
        </div>
      </div>

    <div className="d-flex w-100 gap-3">

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4 "
        onClick={() => update(id)}
      >
        Guardar Cambios
      </button>
      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-danger btn-block mb-4 "
        onClick={() => navigate("/corrales/listado")}
      >
        Cancelar
      </button>
    </div>
    </form>
  )
}

export default EditarCorral