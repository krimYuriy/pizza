import { SET_CATEGORIES, SET_SORT_BY } from "../types"

export const setSortBy = ({ type, order }) => {
   return {
      type: SET_SORT_BY,
      payload: { type, order }
   }
}

export const setCategories = (index) => {
   return {
      type: SET_CATEGORIES,
      payload: index
   }
}