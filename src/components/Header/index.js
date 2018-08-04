import React from 'react'
import {
  oneOf,
} from 'prop-types'

import Icon from 'components/Icon'

import './styles.css'

const Header = ({
  speed,
}) => (
  <header className="App-header">
    <Icon className={`App-logo App-logo-${speed}`} />
    <h1 className="App-title">Let's create-react-app!</h1>
    <h2 className="App-subtitle">Step 0 - Download and setup</h2>
  </header>
)

Header.propTypes = {
  speed: oneOf([
    'stopped',
    'slow',
    'fast',
  ]),
}

Header.defaultProps = {
  speed: 'slow',
}

export default Header
