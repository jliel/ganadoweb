import http from "../constants/index";

const getAll = () => {
  return http.get("/gasto");
};

const get = id => {
    
  return http.get(`/gasto/${id}/`);
};

const create = data => {
    console.log(data)
  return http.post("/gasto/create/", data);
};

const update = (id, data) => {
  return http.put(`/gasto/update/${id}/`, data);
};

const remove = id => {
  return http.delete(`/gasto/delete/${id}/`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove,
};