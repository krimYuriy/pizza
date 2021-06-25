import { combineReducers } from 'redux'
import filterReducer from "./reducers/filterReducer";
import pizzasReducer from './reducers/pizzasReducer'


const rootReducer = combineReducers({
   filters: filterReducer,
   pizzas: pizzasReducer
})


export default rootReducer