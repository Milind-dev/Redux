import { combineReducers } from "redux";
import productReducer from "./product.reducer";
import jsonapiReducer from "./jsonapi.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  jsonapis: jsonapiReducer,

});

export default rootReducer;
