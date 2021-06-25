import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories, PizzaBlock, SortPopup } from '../components'
import { setCategories } from '../redux/actions/filter'

function Home() {
   const items = useSelector(({ pizzas }) => pizzas.items)
   const dispatch = useDispatch()

   const categoresList = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
   const sortList = [{ name: 'популярности', type: 'popular' }, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'alphabet' }]

   const selectCagories = React.useCallback(index => {
      dispatch(setCategories(index))
   }, [])

   return (
      <div className="container">
         <div className="content__top">
            <Categories names={categoresList} onSelectCategories={selectCagories} />
            <SortPopup categories={sortList} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {
               items.map(obj => {
                  return <PizzaBlock key={obj.id} {...obj} />
               })
            }
         </div>
      </div>
   )
}


export default Home
