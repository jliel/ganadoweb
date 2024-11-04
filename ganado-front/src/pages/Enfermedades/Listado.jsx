import React, { useState } from "react";
import enfermedadesdata from '../../data/enfermedades'
import enfermedadesHeaders from "../../data/enfermedades-headers";
import Table from '../../components/Table/Table'

const ListadoEnfermedades = () => {
  const [enfermedades] = useState([...enfermedadesdata]);
  return (
    <Table data={enfermedades} rowsPerPage={4} headers={enfermedadesHeaders} />
  )
}

export default ListadoEnfermedades