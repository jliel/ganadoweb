import React, { useState } from "react";
import ventasdata from '../../data/ventas'
import ventasHeaders from "../../data/ventas-headers";
import Table from '../../components/Table/Table'

const ListadoVentas = () => {
  const [ventas] = useState([...ventasdata]);
  return (
    <Table data={ventas} rowsPerPage={4} headers={ventasHeaders} />
  )
}

export default ListadoVentas