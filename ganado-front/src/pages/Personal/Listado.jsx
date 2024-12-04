import React, { useEffect, useState } from "react";
import personaldata from '../../data/personal'
import personalHeaders from "../../data/personal-headers";
import Table from '../../components/Table/Table'
import PersonalServices from "../../services/PersonalServices";

const ListadoPersonal = () => {
  const [personal, setpersonal] = useState([]);

  useEffect(() => {
  //   console.log(GanadoServices.getAll())
  //  setpersonal(GanadoServices.getAll());
    PersonalServices.getAll().then(res => {
      //console.log(res.data);
      setpersonal(res.data);
  })
  .catch(err => {
      console.log(err.message);
      //setHasError(true)
  });
   //console.log(personal)
  }, []);
  return (
    <Table data={personal} rowsPerPage={4} headers={personalHeaders} to={"personal/editar"} tolist={"personal"}/>
  )
}

export default ListadoPersonal