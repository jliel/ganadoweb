import React, { useState } from "react";
import ganadodata from '../../data/ganado'
import ganadoHeaders from "../../data/ganado-headers";
import Table from '../../components/Table/Table'

const Listado = () => {
  const [ganado] = useState([...ganadodata]);
  return (
    <Table data={ganado} rowsPerPage={4} headers={ganadoHeaders} />
  )
}

export default Listado