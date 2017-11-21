import React, { Component } from 'react'
import './Header.css'

import LayoutContainer from '../LayoutContainer'

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <LayoutContainer>
          <h1>Korem ipsum</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </LayoutContainer>
      </div>
    )
  }
}

export default Header
