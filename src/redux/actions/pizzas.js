import { LOAD_PIZZAS, SET_LOADING } from "../types"

export const loadPizzas = (items) => {
   return {
      type: LOAD_PIZZAS,
      payload: items
   }
}

export const fetchPizzas = (category, sort) => (dispatch) => {
   dispatch({
      type: SET_LOADING
   })
   fetch(`http://localhost:3001/pizzas?${category !== null
      ? `category=${category}`
      : ''}&_sort=${sort.type}&_order=${sort.order}
      `
   )
      .then(response => response.json())
      .then(data => dispatch(loadPizzas(data)))
}