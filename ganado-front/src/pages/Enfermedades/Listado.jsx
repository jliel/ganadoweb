import React, { useEffect, useState } from "react";
import enfermedadesdata from '../../data/enfermedades'
import enfermedadesHeaders from "../../data/enfermedades-headers";
import Table from '../../components/Table/Table'
import EnfermedadServices from '../../services/EnfermedadServices'
const ListadoEnfermedades = () => {
  const [enfermedad, setenfermedad] = useState([]);

  useEffect(() => {
  //   console.log(GanadoServices.getAll())
  //  setenfermedad(GanadoServices.getAll());
    EnfermedadServices.getAll().then(res => {
      //console.log(res.data);
      setenfermedad(res.data);
  })
  .catch(err => {
      console.log(err.message);
      //setHasError(true)
  });
   //console.log(enfermedad)
  }, []);
  const [enfermedades] = useState([...enfermedadesdata]);
  return (
    <Table data={enfermedad} rowsPerPage={4} headers={enfermedadesHeaders} to={"enfermedades/editar"} tolist={"enfermedad"}/>
  )
}

export default ListadoEnfermedades