import React, { Component } from 'react'
import './Header.css'

import LayoutContainer from '../LayoutContainer'

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <LayoutContainer>
          <div className='Header__wrap'>
            <div className='Header__logo' />
            <div className='Header__menu'>
              <div className='Header__menuItem'><div>Development team</div></div>
              <div className='Header__menuItem'><div>Contacts</div></div>
            </div>
          </div>
        </LayoutContainer>
      </div>
    )
  }
}

export default Header
