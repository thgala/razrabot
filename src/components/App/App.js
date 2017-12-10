import React, { Component } from 'react'

import './reset.css'
import './App.css'

import Header from '../Header'
import Promo from '../Promo'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Promo />
      </div>
    )
  }
}

export default App
