import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter";
import { Link } from "react-router-dom";

const Table = ({ data, rowsPerPage, headers }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
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
                <button className="btn bg-danger text-light p-1 m-1">
                  Eliminar
                </button>
                <Link 
                className="btn bg-success text-light p-1"
                to={`/${el.to}/${el.id}`}
                >Editar
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
