import React from 'react'
import {
  bool,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types'

import Icon from 'components/Icon'

import './styles.css'

const Header = ({
  logo,
}) => (
  <header className="App-header">
    <Icon
      className={`App-logo App-logo-${logo.speed}`}
      color={logo.color}
      icon={logo.icon}
    />
    <h1 className="App-title">Let's create-react-app!</h1>
    <h2 className="App-subtitle">Step 2.5 - Immutable & Reselect Refinement</h2>
  </header>
)

Header.propTypes = {
  logo: shape({
    color: string,
    icon: oneOfType([
      bool,
      string,
    ]),
    speed: oneOf([
      'stopped',
      'slow',
      'fast',
    ]),
  }),
}

Header.defaultProps = {
  logo: {
    color: '',
    icon: false,
    speed: 'slow',
  },
}

export default Header
