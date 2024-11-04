import React, { useState } from "react";
import personaldata from '../../data/personal'
import personalHeaders from "../../data/personal-headers";
import Table from '../../components/Table/Table'

const ListadoPersonal = () => {
  const [personal] = useState([...personaldata]);
  return (
    <Table data={personal} rowsPerPage={4} headers={personalHeaders} />
  )
}

export default ListadoPersonal