import React, { useState } from 'react'

function Categories({ names, onSelectCategories }) {
   const [active, setActive] = useState(null)

   const setSelectedItem = index => {
      setActive(index)
      onSelectCategories(index)
   }

   return (
      <div className="categories">
         <ul>
            <li
               onClick={() => setSelectedItem(null)}
               className={active === null ? 'active' : ''}
            >Все
               </li>
            {names && names.map((name, index) => {
               return (
                  <li
                     className={active === index ? 'active' : ''}
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
