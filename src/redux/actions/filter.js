import { SET_CATEGORIES, SET_SORT_BY } from "../types"

export const sortBy = (name) => {
   return {
      type: SET_SORT_BY,
      payload: name
   }
}

export const setCategories = (index) => {
   return {
      type: SET_CATEGORIES,
      payload: index
   }
}