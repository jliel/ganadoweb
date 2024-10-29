import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage, headers }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    return (
        <>
        <table className="table" >
          <thead>
            <tr>
            {headers.map((el) => (
                <th scope="col" key={el}>{el}</th>
            ))}
            </tr>
          </thead>
          <tbody>
            {slice.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.identificador}</td>
                <td>{el.fecha_registro}</td>
                <td>{el.corral}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      </>
    );
};

export default Table;