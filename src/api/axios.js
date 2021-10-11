import { Axios } from "axios";
import { BASEURL } from "./const";

const axiosInstance = new Axios({
  baseURL: BASEURL,
});

// https://axios-http.com/docs/interceptors

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
