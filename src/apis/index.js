import axios from "axios";

let instance = null;

const getInstance = () => {
  if (instance) {
    return instance;
  }
  instance = axios.create({
    baseURL: "http://34.135.99.222",
  });
  return instance;
};

export const get = (url, config = {}) => getInstance().get(url, config);
export const post = (url, payload, config = {}) =>
  getInstance().post(url, payload, config);
export const put = (url, payload, config = {}) =>
  getInstance().put(url, payload, config);
