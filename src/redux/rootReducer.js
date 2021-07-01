import { combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer';
import filterReducer from "./reducers/filterReducer";
import pizzasReducer from './reducers/pizzasReducer'


const rootReducer = combineReducers({
   filters: filterReducer,
   pizzas: pizzasReducer,
   cart: cartReducer
})


export default rootReducer