import React, { useEffect, useState } from "react";
import gastosdata from '../../data/gastos'
import gastosHeaders from "../../data/gastos-headers";
import Table from '../../components/Table/Table'
import GastoServices from "../../services/GastoServices";

const ListadoGastos = () => {
  const [gasto, setgasto] = useState([]);

  useEffect(() => {
  //   console.log(GanadoServices.getAll())
  //  setgasto(GanadoServices.getAll());
    GastoServices.getAll().then(res => {
      //console.log(res.data);
      setgasto(res.data);
  })
  .catch(err => {
      console.log(err.message);
      //setHasError(true)
  });
   //console.log(gasto)
  }, []);
  const [gastos] = useState([...gastosdata]);
  return (
    <Table data={gasto} rowsPerPage={4} headers={gastosHeaders} to={"gastos/editar"} tolist={"gasto"}/>
  )
}

export default ListadoGastos