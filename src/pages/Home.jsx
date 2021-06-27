import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories, Loader, PizzaBlock, SortPopup } from '../components'
import { setCategories, setSortBy } from '../redux/actions/filter'
import { fetchPizzas } from '../redux/actions/pizzas'

function Home() {
   const { items, isLoaded } = useSelector(({ pizzas }) => ({
      items: pizzas.items,
      isLoaded: pizzas.isLoaded
   }))

   const { category, sortBy } = useSelector(({ filters }) => ({
      category: filters.category,
      sortBy: filters.sortBy
   }))


   const dispatch = useDispatch()

   const categoresList = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
   const sortList = [
      { name: 'популярности', type: 'popular', order: 'desc' },
      { name: 'цене', type: 'price', order: 'desc' },
      { name: 'алфавиту', type: 'name', order: 'asc' }
   ]

   const selectCagories = React.useCallback(index => {
      dispatch(setCategories(index))
   }, [dispatch])

   const selectSort = React.useCallback(type => {
      dispatch(setSortBy(type))
   }, [dispatch])


   useEffect(() => {
      dispatch(fetchPizzas(category, sortBy))
   }, [category, sortBy])

   return (
      <div className="container">
         <div className="content__top">
            <Categories names={categoresList} onSelectCategories={selectCagories} activeCategory={category} />
            <SortPopup categories={sortList} activeSort={sortBy.type} onSetSortBy={selectSort} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {
               isLoaded
                  ? items.map(obj => {
                     return <PizzaBlock key={obj.id} {...obj} />
                  })
                  : new Array(12)
                     .fill(null)
                     .map((_, index) => <Loader key={index} />)
            }
         </div>
      </div>
   )
}


export default Home
