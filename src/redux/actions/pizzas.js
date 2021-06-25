import { LOAD_PIZZAS } from "../types"

export const loadPizzas = (items) => {
   return {
      type: LOAD_PIZZAS,
      payload: items
   }
}