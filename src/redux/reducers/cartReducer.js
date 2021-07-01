import { ADD_PIZZAS, REMOVE_CART } from "../types"

const initialState = {
   items: {},
   totalPizzasPrice: 0,
   totalPizzasCount: 0
}

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PIZZAS: {
         const getPrice = (arr) => arr.reduce((total, item) => total + item.price, 0)

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
      default:
         return state
   }
}

export default cartReducer