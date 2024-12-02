import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/ganado",
  headers: {
    "Content-type": "application/json"
  },
  withCredentials: false,
        
});