import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Contacts.css'

import LayoutContainer from '../LayoutContainer'

class Contacts extends Component {
  render() {
    return (
      <div className='Contacts'>
        <LayoutContainer>
          <h2>Contacts</h2>
        </LayoutContainer>
      </div>
    )
  }
}

export default Contacts
