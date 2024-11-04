import React, { useState } from "react";
import gastosdata from '../../data/gastos'
import gastosHeaders from "../../data/gastos-headers";
import Table from '../../components/Table/Table'

const ListadoGastos = () => {
  const [gastos] = useState([...gastosdata]);
  return (
    <Table data={gastos} rowsPerPage={4} headers={gastosHeaders} />
  )
}

export default ListadoGastos