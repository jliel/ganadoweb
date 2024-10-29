import React, { useState } from "react";
import corralesdata from '../../data/corrales'
import corralesHeaders from "../../data/corrales-headers";
import Table from '../../components/Table/Table'

const ListadoCorral = () => {
  const [corrales] = useState([...corralesdata]);
  return (
    <Table data={corrales} rowsPerPage={4} headers={corralesHeaders} />
  )
}

export default ListadoCorral