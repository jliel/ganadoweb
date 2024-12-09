import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GastoServices from '../../services/GastoServices'
import { useNavigate } from 'react-router-dom';

const EditarGasto = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [cantidad, setcantidad] = useState([]);
  const [fecha, setfecha] = useState([]);
  const [id_personal, setid_personal] = useState([]);

  useEffect(() => {
    GastoServices.get(id)
      .then((res) => {
        setcantidad(res.data.cantidad);
        setfecha(res.data.fecha_registro);
        setid_personal(res.data.id_personal);
      })
      .catch((e) => {
        console.log("Error registro no existe.");
      });
  }, []);


  const update = (e) => {
    let gasto = {
      "cantidad": "",
      "fecha_registro":"",
      "id_personal":"",
    }
  
    gasto.cantidad = document.getElementById("cantidad").value;
    gasto.fecha_registro = document.getElementById("fecha").value;
    gasto.id_personal = document.getElementById("personal").value;
    GastoServices.update(id, gasto)
    navigate("/gastos/listado")
  }
  return (
    <form className="form-agregar">
      <h2>Editar Gasto</h2>
      <div className="col">
        <div data-mdb-input-init className="form-outline">
          <input type="text" id="cantidad" className="form-control" value={cantidad} onChange={(e) => setcantidad(e.target.value)}/>
          <label className="form-label" for="cantidad">
            Cantidad
          </label>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <input type="date" id="fecha" className="form-control" value={fecha} onChange={(e) => setfecha(e.target.value)}/>
            <label className="form-label" for="fecha">
              Fecha de gasto
            </label>
          </div>
        </div>
        <div data-mdb-input-init className="form-outline mb-4 col">
          <input type="text" id="personal" className="form-control" value={id_personal} onChange={(e) => setid_personal(e.target.value)}/>
          <label className="form-label" for="id_personal">
            Personal que autoriza
          </label>
        </div>
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
        onClick={() => navigate("/gastos/listado")}
      >
        Cancelar
      </button>
      </div>

      
    </form>
  )
}

export default EditarGasto