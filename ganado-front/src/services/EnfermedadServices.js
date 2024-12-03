import http from "../constants/index";

const getAll = () => {
  return http.get("/enfermedad");
};

const get = id => {
    
  return http.get(`/enfermedad/${id}/`);
};

const create = data => {
    console.log(data)
  return http.post("/enfermedad/create/", data);
};

const update = (id, data) => {
  return http.put(`/enfermedad/update/${id}/`, data);
};

const remove = id => {
  return http.delete(`/enfermedad/delete/${id}/`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove,
};