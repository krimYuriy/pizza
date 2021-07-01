import React from 'react'
import ClassName from 'classnames'

const Button = ({ children, className, outline, onClick }) => {
   return (

      <button className={ClassName('button', className, {
         'button--outline': outline
      })} onClick={onClick}>
         {children}
      </button>

   )
}

export default Button
