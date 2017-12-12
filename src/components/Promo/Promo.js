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
                  Hi, my name is Klara. <br/>
                  I programmed for you
                </h1>
                <h4>
                  A telegram chat bot built to analyse your development velocity and 
                  show where to improve at skills and time.
                </h4>
              </div>
              <button>Start use me</button>
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
