import React, { Component } from 'react'

import './reset.css'
import './App.css'

import Header from '../Header'
import Promo from '../Promo'
import DevTeam from '../DevTeam'
import Contacts from '../Contacts'

// Store
import { DEV_TEAM_LIST } from './mock/data'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Promo />
        <DevTeam
          list={DEV_TEAM_LIST}
        />
        <hr />
        <Contacts />
      </div>
    )
  }
}

export default App
