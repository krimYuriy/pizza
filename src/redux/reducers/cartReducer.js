import { ADD_PIZZAS, DECREASE_PIZZA_COUNT, INCREASE_PIZZA_COUNT, REMOVE_CART, REMOVE_PIZZA_ITEM } from "../types"

const initialState = {
   items: {},
   totalPizzasPrice: 0,
   totalPizzasCount: 0
}

const getPrice = (arr) => arr.reduce((total, item) => total + item.price, 0)

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PIZZAS: {

         const currentItem = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].pizzas, action.payload]


         const newItems = {
            ...state.items,
            [action.payload.id]: {
               pizzas: currentItem,
               pizzaPrice: getPrice(currentItem)
            }
         }


         const pizzaObj = Object.values(newItems).map(obj => obj.pizzas)

         const allPizzas = [].concat.apply([], pizzaObj)
         const totalPrice = getPrice(allPizzas)

         return {
            ...state,
            items: newItems,
            totalPizzasCount: allPizzas.length,
            totalPizzasPrice: totalPrice
         }
      }
      case REMOVE_CART:
         return {
            ...state,
            items: {},
            totalPizzasPrice: 0,
            totalPizzasCount: 0
         }
      case REMOVE_PIZZA_ITEM: {
         const newItems = {
            ...state.items
         }
         const currenPrice = newItems[action.payload].pizzaPrice
         const currenCount = newItems[action.payload].pizzas.length
         delete newItems[action.payload]

         return {
            ...state,
            items: newItems,
            totalPizzasPrice: state.totalPizzasPrice - currenPrice,
            totalPizzasCount: state.totalPizzasCount - currenCount
         }
      }
      case INCREASE_PIZZA_COUNT: {
         const currentPizzas = [...state.items[action.payload].pizzas, state.items[action.payload].pizzas[0]]
         const currentPizzaPrice = state.items[action.payload].pizzas[0].price


         const newItems = {
            ...state.items,
            [action.payload]: {
               pizzas: currentPizzas,
               pizzaPrice: getPrice(currentPizzas)
            }
         }

         return {
            ...state,
            items: newItems,
            totalPizzasPrice: state.totalPizzasPrice + currentPizzaPrice,
            totalPizzasCount: state.totalPizzasCount + 1
         }
      }
      case DECREASE_PIZZA_COUNT: {

         const currentPizzaPrice = state.items[action.payload].pizzas.length > 1 ? state.items[action.payload].pizzas[0].price : 0

         const currentPizzas = state.items[action.payload].pizzas.length > 1
            ? state.items[action.payload].pizzas.slice(1)
            : [state.items[action.payload].pizzas[0]]


         const newItems = {
            ...state.items,
            [action.payload]: {
               pizzas: currentPizzas,
               pizzaPrice: getPrice(currentPizzas)
            }
         }

         const count = Object.keys(newItems).reduce((total, key) => total + newItems[key].pizzas.length, 0)

         return {
            ...state,
            items: newItems,
            totalPizzasPrice: state.totalPizzasPrice - currentPizzaPrice,
            totalPizzasCount: count
         }
      }
      default:
         return state
   }
}

export default cartReducer