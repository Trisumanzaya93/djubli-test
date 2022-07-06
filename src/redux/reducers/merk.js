import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  merk: [],
  filter: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getMerkReducer = (prevState = initialState, action) => {
  const { getMerk } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case getMerk.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case getMerk.concat("_", Fulfilled):
      const data = action.payload.data.data;
    //   console.log("prevState", prevState);
      const merk = {
        ...prevState.merk,
        merk:data
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        merk,
      };

    // case authLogin + rejected:
    case getMerk.concat("_", Rejected):
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

export default getMerkReducer;