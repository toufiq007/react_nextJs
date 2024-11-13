import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8000`,
});

const authorizationToken = "fdkfdkfdjfkdjfdkfjdfjdfdjejwekwjew";
// making our request interseptors
// in every request this interceptors will be used and headers get this token in request headers
api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${authorizationToken}`;
    console.log(config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
