import React, { Component } from 'react'
import classnames from 'classnames'
import './BrowserWrap.css'

class BrowserWrap extends Component {
  render() {
    const { title, children, className, } = this.props

    return (
      <div className={classnames('BrowserWrap', className)}>
        <div className='BrowserWrap__header'>
          <div className='BrowserWrap__controls'>
            <div />
            <div />
            <div />
          </div>
          <div className='BrowserWrap__search'>
            {title}
          </div>
        </div>
        <div className='BrowserWrap__content'>
          {children}
        </div>
      </div>
    )
  }
}

export default BrowserWrap
