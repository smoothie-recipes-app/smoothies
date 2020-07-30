import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from "redux-thunk"
import logger from 'redux-logger'
import loginReducer from "./UserLogin/LoginReducer"
import recipesReducer from './Recipes/RecipesReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

import registerReducer from "./UserRegister/RegisterReducer"
import {fetchFavouritesReducer} from './Favourites/FavouritesReducer';
import {uploadFavouritesReducer} from './Favourites/FavouritesReducer';

const rootReducer = combineReducers({
  login : loginReducer,
  register:  registerReducer,
  recipes : recipesReducer,
  fetchFavourites : fetchFavouritesReducer,
  uploadFavourites : uploadFavouritesReducer
})

const middlewares = [thunk]

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares ),
  ));

export default store;