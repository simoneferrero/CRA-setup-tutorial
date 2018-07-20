import React from 'react'
import {
  string,
} from 'prop-types'

import './styles.css'

const StoreDisplay = ({
  stringifiedStore,
}) => (
  <div className="Store-display-container">
    <p>Your store:</p>
    <pre>{ stringifiedStore }</pre>
  </div>
)

StoreDisplay.propTypes = {
  stringifiedStore: string,
}

StoreDisplay.defaultProps = {
  stringifiedStore: '',
}

export default StoreDisplay
