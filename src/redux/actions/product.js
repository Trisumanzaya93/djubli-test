import { ACTION_STRING } from "./actionString";
import {  createProduct, getAllProduct, getGroupModel, getMerk, getModel, getProductById } from "../../utils/product";

export const getMerkAction = () => {
  return {
    type: ACTION_STRING.getMerk,
    payload: getMerk(),
  };
};

export const getGroupModelAction = () => {
    return {
      type: ACTION_STRING.getGroupModel,
      payload: getGroupModel(),
    };
  };

  export const getModelAction = () => {
    return {
      type: ACTION_STRING.getModel,
      payload: getModel(),
    };
  };
  export const getAllProductAction = (param) => {
    return {
      type: ACTION_STRING.getAllProduct,
      payload: getAllProduct(param),
    };
  };
  export const createProductAction = (body) => {
    return {
      type: ACTION_STRING.createProduct,
      payload: createProduct(body),
    };
  };
  export const getProductByIdAction = (id) => {
    return {
      type: ACTION_STRING.getProductById,
      payload: getProductById(id),
    };
  };