import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import { Header } from './components'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { loadPizzas } from './redux/actions/pizzas'

import './scss/app.scss'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then(response => response.json())
      .then(data => dispatch(loadPizzas(data)))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path={'/'} exact component={Home} />
        <Route path={'/cart'} exact component={Cart} />
      </div>
    </div>
  )
}


export default App
