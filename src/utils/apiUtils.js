import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

const getAll = {
  baseURL: BASE_URL,
  method: 'get',
  url: '/all'
}

const apiUtils = {
  getAll: () => axios(getAll)
};

export default apiUtils;