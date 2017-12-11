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
            I can help you to analyse your development velocity - how accurate you are with the task estimations.
            I will give you a feedback which helps you to understand where to improve your professional skills.
          </h3>
        </LayoutContainer>
      </div>
    )
  }
}

export default HowToUse
