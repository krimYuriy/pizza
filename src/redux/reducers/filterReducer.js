import { SET_CATEGORIES } from '../types'
import { SET_SORT_BY } from '../types'

const initialState = {
   sortBy: 'popular',
   category: 0
}

const filterReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_SORT_BY:
         return {
            ...state,
            sortBy: action.payload
         }
      case SET_CATEGORIES:
         return {
            ...state,
            category: action.payload
         }
      default:
         return state
   }

}

export default filterReducer