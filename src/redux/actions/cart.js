import { ADD_PIZZAS, REMOVE_CART, REMOVE_PIZZA_ITEM, INCREASE_PIZZA_COUNT, DECREASE_PIZZA_COUNT } from "../types";

export const setPizza = obj => ({
   type: ADD_PIZZAS,
   payload: obj
})

export const removePizza = () => ({
   type: REMOVE_CART
})

export const removePizzaItem = id => ({
   type: REMOVE_PIZZA_ITEM,
   payload: id
})

export const increasePizzaCount = id => ({
   type: INCREASE_PIZZA_COUNT,
   payload: id
})

export const decreasePizzaCount = id => ({
   type: DECREASE_PIZZA_COUNT,
   payload: id
})