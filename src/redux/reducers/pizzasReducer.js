import { LOAD_PIZZAS } from "../types"

const initialState = {
   items: [],
   isLoaded: false
}

const pizzasReducer = (state = initialState, action) => {
   if (action.type === LOAD_PIZZAS) {
      return {
         ...state,
         items: action.payload,
         isLoaded: true
      }
   }
   return state
}

export default pizzasReducer