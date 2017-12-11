import React, { Component } from 'react'

import './reset.css'
import './App.css'

import Header from '../Header'
import Promo from '../Promo'
import HowToUse from '../HowToUse'
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
        <HowToUse />
        <DevTeam
          list={DEV_TEAM_LIST}
        />
        <Contacts />
      </div>
    )
  }
}

export default App
