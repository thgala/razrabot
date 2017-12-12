import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HowToUse.css'

import LayoutContainer from '../LayoutContainer'

class HowToUse extends Component {
  render() {
    const { steps } = this.props

    return (
      <div className='HowToUse'>
        <LayoutContainer>
          <h3 className='HowToUse__title'>
            <span>Klara</span> has an intuitive and simple interface on the frontend side
            and artificial intelligence driven system on other.
            Klara believes in numbers and data analysis so it is a fair play — no reliable conclusions.
          </h3>
          <div className='HowToUse__content'>
            {steps.map((step, i) => {
              return (
                <div className='HowToUse__box' key={i}>
                  <div
                    className='HowToUse__boxImage'
                    style={{ backgroundImage: `url(${step.imageUrl})`, }}
                  />
                  <div className='HowToUse__boxText'>
                    <h3>
                      {step.title}
                    </h3>
                    <p>
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </LayoutContainer>
      </div>
    )
  }
}

HowToUse.defaultProps = {
  steps: [],
}

export default HowToUse
