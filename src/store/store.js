import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { listarFavoritosReducer } from "../reducers/listarFavoritosReducer";
import { loginReducer } from "../reducers/loginReducer";
import moviesReducer from "../reducers/moviesReducer";
import { registroReducer } from "../reducers/registroReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,
  registro: registroReducer,
  movies: moviesReducer,
  listarFav: listarFavoritosReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
