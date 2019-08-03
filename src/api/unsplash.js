import axios from "axios";

const peticion = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID fa82f755c81fd4b9e28c57949cb073b93853a0d383a7532382b61110ed6509bd"
  }
});
export default peticion;
