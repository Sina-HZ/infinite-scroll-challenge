import axios from "axios";
import config from "@constants/config";

const instance = axios.create({
  ...config.api,
});

instance.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === "development") {
      console.log({ config });
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === "development") {
      console.log({ response });
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // handle Authorization error
    }
    return Promise.reject(error);
  }
);

export default instance;
