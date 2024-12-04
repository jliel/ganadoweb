import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import GanadoServices from "../../services/GanadoServices";
import CorralServices from "../../services/CorralServices";
import PersonalServices from "../../services/PersonalServices";
import GastoServices from "../../services/GastoServices"
import VentaServices from "../../services/VentaServices";
import EnfermedadServices from "../../services/EnfermedadServices";

const Table = ({ data, rowsPerPage, headers, to, tolist }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  function eliminar(id) {
    const objWithIdIndex = data.findIndex((obj) => obj.id === id);
    const con = confirm(
      "Realmente deseas eliminar el registro " + data[objWithIdIndex].id
    );
    if (con) {
      console.log(data[objWithIdIndex] + "objeto encontado");
      data.splice(objWithIdIndex, 1);
      switch (tolist) {
        case "ganado":
          GanadoServices.remove(id);
          break;
        case "corral":
          CorralServices.remove(id);
          break;
        case "personal":
          PersonalServices.remove(id);
          break;
        case "gasto":
          GastoServices.remove(id);
          break;
        case "venta":
          VentaServices.remove(id);
          break;
        case "enfermedad":
          EnfermedadServices.remove(id);
          break;
      }
      console.log(id + "eliminado");
      window.location.reload();
    }
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {headers.map((el) => (
              <th scope="col" key={el}>
                {el}
              </th>
            ))}
            <th scope="col"> Comandos</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              {el.nombre ? <td>{el.nombre}</td> : ""}
              {el.descripcion ? <td>{el.descripcion}</td> : ""}
              {el.cantidad ? <td>{el.cantidad}</td> : ""}
              {el.identificador ? <td>{el.identificador}</td> : ""}
              {el.fecha_registro ? <td>{el.fecha_registro}</td> : ""}
              {el.corral ? <td>{el.corral}</td> : ""}
              {el.id_personal ? <td>{el.id_personal}</td> : ""}
              {el.id_ganado ? <td>{el.id_ganado}</td> : ""}
              <td>
                <button
                  className="btn bg-danger text-light p-1 m-1"
                  onClick={() => eliminar(el.id)}
                >
                  Eliminar
                </button>
                <Link
                  className="btn bg-success text-light p-1"
                  to={`/${to}/${el.id}`}
                  state={{ id: el.id }}
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
