import { combineReducers } from "redux";
import photoReducer from "./photo.reducer";

const rootReducer = combineReducers({
  photos: photoReducer,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;