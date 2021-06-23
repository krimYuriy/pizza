import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components'
import Home from './pages/Home'
import Cart from './pages/Cart'

import './scss/app.scss'



function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then(response => response.json())
      .then(data => setPizzas(data.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path={'/'} exact render={() => <Home items={pizzas} />} />
        <Route path={'/cart'} exact component={Cart} />
      </div>
    </div>
  )
}

export default App;
