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
            <h1>I programmed to help you</h1>
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
