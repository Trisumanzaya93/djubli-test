import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  model: [],
  filter: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getModelReducer = (prevState = initialState, action) => {
  const { getModel } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case getModel.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case getModel.concat("_", Fulfilled):
      const data = action.payload.data.data;
    //   console.log("prevState", prevState);
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        model:data,
      };

    // case authLogin + rejected:
    case getModel.concat("_", Rejected):
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err,
      };

    default:
      return prevState;
  }
};

export default getModelReducer;