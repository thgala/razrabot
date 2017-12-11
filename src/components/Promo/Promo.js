import React, { Component } from 'react'
import FullScreen from 'react-fullscreen'
import './Promo.css'

import LayoutContainer from '../LayoutContainer'

class Promo extends Component {
  render() {
    const { width, height, } = this.props
    const PromoStyles = { width, height, }

    return (
      <div className='Promo' style={PromoStyles}>
        <div className='Promo__wrap'>
          <LayoutContainer>
            <div className='Promo__content'>
              <div className='Promo__texts'>
                <h1>
                  Hy, my name is Klara, <br/>
                  I programmed for you
                </h1>
                <h3>
                  I can help you to analyse your development velocity - how accurate you are with the task estimations.
                  I will give you a feedback which helps you to understand where to improve your professional skills.
                </h3>
              </div>
              <button>Start using bot</button>
            </div>
          </LayoutContainer>
        </div>
      </div>
    )
  }
}

const PromoWrap = props => {
  return (
    <FullScreen>
      <Promo {...props} />
    </FullScreen>
  )
}

export default PromoWrap
