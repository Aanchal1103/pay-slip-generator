import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "reducers";

const middlewares = [thunk];
const enhancer = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export default store;
