import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './LayoutContainer.css'

class LayoutContainer extends Component {
  render() {
    const { children, className } = this.props

    return (
      <div className={classnames('LayoutContainer', className)}>
        {children}
      </div>
    )
  }
}

LayoutContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default LayoutContainer
