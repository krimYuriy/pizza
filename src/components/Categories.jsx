import React from 'react'

function Categories({ names, onSelectCategories, activeCategory }) {


   const setSelectedItem = index => {
      onSelectCategories(index)
   }

   return (
      <div className="categories">
         <ul>
            <li
               onClick={() => setSelectedItem(null)}
               className={activeCategory === null ? 'active' : ''}
            >Все
               </li>
            {names && names.map((name, index) => {
               return (
                  <li
                     className={activeCategory === index ? 'active' : ''}
                     key={`${name} ${index}`}
                     onClick={() => setSelectedItem(index)}
                  >{name}
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default React.memo(Categories)
