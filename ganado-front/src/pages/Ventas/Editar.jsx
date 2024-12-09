import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VentaServices from '../../services/VentaServices'

const EditarVenta = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [cantidad, setcantidad] = useState([]);
  const [fecha, setfecha] = useState([]);
  const [id_personal, setid_personal] = useState([]);

  useEffect(() => {
    VentaServices.get(id)
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
    let venta = {
      "cantidad": "",
      "fecha_registro":"",
      "id_personal":"",
    }
  
    venta.cantidad = document.getElementById("cantidad").value;
    venta.fecha_registro = document.getElementById("fecha").value;
    venta.id_personal = document.getElementById("personal").value;
    VentaServices.update(id, venta)
    navigate("/ventas/listado")
  }
  return (
    <form className="form-agregar">
      <h2>Editar Venta</h2>
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
              Fecha de Venta
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
        onClick={() => navigate("/ventas/listado")}
      >
        Cancelar
      </button>
      </div>
    </form>
  )
}

export default EditarVenta