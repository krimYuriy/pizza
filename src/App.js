import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components'
import Home from './pages/Home'
import Cart from './pages/Cart'


import './scss/app.scss'


function App() {

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
