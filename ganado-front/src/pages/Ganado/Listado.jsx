import React, { useEffect, useState } from "react";
import ganadodata from '../../data/ganado'
import ganadoHeaders from "../../data/ganado-headers";
import Table from '../../components/Table/Table'
import GanadoServices from "../../services/GanadoServices";


const Listado = () => {
  const [vacas, setvacas] = useState([]);

  useEffect(() => {
  //   console.log(GanadoServices.getAll())
  //  setvacas(GanadoServices.getAll());
    GanadoServices.getAll().then(res => {
      //console.log(res.data);
      setvacas(res.data);
  })
  .catch(err => {
      console.log(err.message);
      //setHasError(true)
  });
   //console.log(vacas)
  }, []);
  const [ganado] = useState([...vacas]);
  return (
    <Table data={vacas} rowsPerPage={4} headers={ganadoHeaders} to={"ganado/editar"} tolist={"ganado"}/>
  )
}

export default Listado