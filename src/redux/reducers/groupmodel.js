import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  groupModel: [],
  filter: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getGroupModelReducer = (prevState = initialState, action) => {
  const { getGroupModel } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case getGroupModel.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case getGroupModel.concat("_", Fulfilled):
      const data = action.payload.data.data;
    //   console.log("prevState", prevState);
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        groupModel:data,
      };

    // case authLogin + rejected:
    case getGroupModel.concat("_", Rejected):
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

export default getGroupModelReducer;