import { combineReducers } from "redux";
import formReducer from "./formReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  form: formReducer,
  ui: uiReducer,
});
