import http from "../constants/index";

const getAll = () => {
  return http.get("/personal");
};

const get = id => {
    
  return http.get(`/personal/${id}/`);
};

const create = data => {
    console.log(data)
  return http.post("/personal/create/", data);
};

const update = (id, data) => {
  return http.put(`/personal/update/${id}/`, data);
};

const remove = id => {
  return http.delete(`/personal/delete/${id}/`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove,
};