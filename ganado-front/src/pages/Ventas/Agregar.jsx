import React from "react";
import VentaServices from "../../services/VentaServices";
import { useNavigate } from "react-router-dom";

const AgregarVenta = () => {
  const navigate = useNavigate();

  let venta = {
    "cantidad": "",
    "fecha_registro":"",
    "id_personal":"",
  }

  const create = (e) => {
    venta.cantidad = document.getElementById("cantidad").value;
    venta.fecha_registro = document.getElementById("fecha").value;
    venta.id_personal = document.getElementById("personal").value;
    VentaServices.create(venta);
    navigate("/ventas/listado");
  };
  return (
    <form className="form-agregar">
      <h2>Agregar Venta</h2>
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
              Fecha de venta
            </label>
          </div>
        </div>
        <div data-mdb-input-init className="form-outline mb-4 col">
          <input type="text" id="personal" className="form-control" />
          <label className="form-label" for="id_personal">
            Personal que autoriza
          </label>
        </div>
      </div>

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={() => create()}

      >
        Agregar
      </button>
    </form>
  );
};

export default AgregarVenta;
