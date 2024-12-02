import http from "../constants/index";

const getAll = () => {
  return http.get("/vacas");
};

const get = id => {
    
  return http.get(`/vacas/${id}/`);
};

const create = data => {
    console.log(data)
  return http.post("/vacas/create/", data);
};

const update = (id, data) => {
  return http.put(`/vacas/update/${id}/`, data);
};

const remove = id => {
  return http.delete(`/vacas/delete/${id}/`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove,
};