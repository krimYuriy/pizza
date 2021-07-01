import { ADD_PIZZAS, REMOVE_CART } from "../types";

export const setPizza = obj => ({
   type: ADD_PIZZAS,
   payload: obj
})

export const removePizza = () => ({
   type: REMOVE_CART
})