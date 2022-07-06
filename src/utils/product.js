import axios from "axios";

export const getMerk = () => {
    const URL = process.env.REACT_APP_HOST + `product/master/merk`;
    return axios.get(URL);
  };

  export const getGroupModel = () => {
    const URL = process.env.REACT_APP_HOST + `product/master/groupmodel`;
    return axios.get(URL);
  };

  export const getModel = () => {
    const URL = process.env.REACT_APP_HOST + `product/master/model`;
    return axios.get(URL);
  };
  export const getProductById = (id) => {
    const URL = process.env.REACT_APP_HOST + `product/${id}`;
    return axios.get(URL);
  };
  export const createProduct = (body) => {
    const URL = process.env.REACT_APP_HOST + `product/createproduct`;
    return axios.post(URL,body);
  };

  export const getAllProduct = (param) => {
    const queryParam = {
        brand_id: param.brand_id??"",
        group_model_id: param.group_model_id??"",
        model_id: param.model_id??"",
        per_page: param.per_page ?? '10',
        page: param.page ?? '1',
    }
    const URL = process.env.REACT_APP_HOST + 
    `product?brand_id=${queryParam.brand_id}&group_id=${queryParam.group_model_id}&model_id=${queryParam.model_id}&page=${queryParam.page}&per_page=${queryParam.per_page}`
    return axios.get(URL);
  };