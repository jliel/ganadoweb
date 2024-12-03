import http from "../constants/index";

const getAll = () => {
  return http.get("/venta");
};

const get = id => {
    
  return http.get(`/venta/${id}/`);
};

const create = data => {
    console.log(data)
  return http.post("/venta/create/", data);
};

const update = (id, data) => {
  return http.put(`/venta/update/${id}/`, data);
};

const remove = id => {
  return http.delete(`/venta/delete/${id}/`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove,
};