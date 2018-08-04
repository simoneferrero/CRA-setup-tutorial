import React from 'react'
import {
  oneOf,
  shape,
} from 'prop-types'

import Icon from 'components/Icon'

import './styles.css'

const Header = ({
  logo,
}) => (
  <header className="App-header">
    <Icon className={`App-logo App-logo-${logo.speed}`} />
    <h1 className="App-title">Let's create-react-app!</h1>
    <h2 className="App-subtitle">Step 2 - Immutable & Reselect</h2>
  </header>
)

Header.propTypes = {
  logo: shape({
    speed: oneOf([
      'stopped',
      'slow',
      'fast',
    ]),
  }),
}

Header.defaultProps = {
  logo: {
    speed: 'slow',
  },
}

export default Header
