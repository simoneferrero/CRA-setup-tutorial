import React from 'react'
import {
  oneOf,
  shape,
} from 'prop-types'

import reactLogo from 'icons/reactLogo.svg'

import './styles.css'

const Header = ({
  logo,
}) => (
  <header className="App-header">
    <img src={reactLogo} className={`App-logo App-logo-${logo.speed}`} alt="logo" />
    <h1 className="App-title">CRA Setup Tutorial - Immutable & Reselect</h1>
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
