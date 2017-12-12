import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HowToUse.css'

import LayoutContainer from '../LayoutContainer'

class HowToUse extends Component {
  render() {
    return (
      <div className='HowToUse'>
        <LayoutContainer>
          <h3>
            Klara has an intuitive and simple interface on the frontend side
            and artificial intelligence driven system on other.
            Klara believes in numbers and data analysis so it is a fair play — no reliable conclusions.
          </h3>
        </LayoutContainer>
      </div>
    )
  }
}

export default HowToUse
