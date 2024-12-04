import React, { useEffect, useState } from "react";
import ventasdata from '../../data/ventas'
import ventasHeaders from "../../data/ventas-headers";
import Table from '../../components/Table/Table'
import VentaServices from '../../services/VentaServices'

const ListadoVentas = () => {
  const [venta, setventa] = useState([]);

  useEffect(() => {
  //   console.log(GanadoServices.getAll())
  //  setventa(GanadoServices.getAll());
    VentaServices.getAll().then(res => {
      //console.log(res.data);
      setventa(res.data);
  })
  .catch(err => {
      console.log(err.message);
      //setHasError(true)
  });
   //console.log(venta)
  }, []);
  const [ventas] = useState([...ventasdata]);
  return (
    <Table data={venta} rowsPerPage={4} headers={ventasHeaders} to={"ventas/editar"} tolist={"venta"}/>
  )
}

export default ListadoVentas