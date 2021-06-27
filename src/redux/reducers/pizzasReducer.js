import { LOAD_PIZZAS, SET_LOADING } from "../types"

const initialState = {
   items: [],
   isLoaded: false
}

const pizzasReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_PIZZAS:
         return {
            ...state,
            items: action.payload,
            isLoaded: true
         }
      case SET_LOADING:
         return {
            ...state,
            isLoaded: false
         }
      default:
         return state
   }



}

export default pizzasReducer