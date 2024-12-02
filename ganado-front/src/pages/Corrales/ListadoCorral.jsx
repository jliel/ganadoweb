import React, { useEffect, useState } from "react";
import corralesdata from '../../data/corrales'
import corralesHeaders from "../../data/corrales-headers";
import Table from '../../components/Table/Table'
import CorralServices from "../../services/CorralServices";

const ListadoCorral = () => {
  const [corral, setcorral] = useState([]);

  useEffect(() => {
    //   console.log(GanadoServices.getAll())
    //  setcorral(GanadoServices.getAll());
      CorralServices.getAll().then(res => {
        //console.log(res.data);
        setcorral(res.data);
    })
    .catch(err => {
        console.log(err.message);
        //setHasError(true)
    });
     //console.log(vacas)
    }, []);
  const [corrales] = useState([...corralesdata]);
  return (
    <Table data={corral} rowsPerPage={4} headers={corralesHeaders} to={"corrales/editar"} tolist={"corral"}/>
  )
}

export default ListadoCorral