import React from 'react'
import ClassName from 'classnames'

const Button = ({ children, className, outline }) => {
   return (

      <button className={ClassName('button', className, {
         'button--outline': outline
      })}>
         {children}
      </button>

   )
}

export default Button
