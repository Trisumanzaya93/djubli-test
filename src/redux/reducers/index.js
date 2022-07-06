import { combineReducers } from "redux";
// menggabungkan semua reducer menjadi 1
import getMerkReducer from "./merk";
import getGroupModelReducer from "./groupmodel";
import getModelReducer from "./model";
import getAllProductReducer from "./allProduct";
import getProductByIdReducer from "./productId";


const reducers = combineReducers({
    merk:getMerkReducer,
    groupModel:getGroupModelReducer,
    model:getModelReducer,
    allProduct:getAllProductReducer,
    product:getProductByIdReducer
});

export default reducers;