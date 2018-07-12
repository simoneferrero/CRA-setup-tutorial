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
  stringifiedStore: string.isRequired,
}

export default StoreDisplay
