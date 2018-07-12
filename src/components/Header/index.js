import React from 'react'
import {
  oneOf,
} from 'prop-types'

import logo from 'icons/logo.svg'

import './styles.css'

const Header = ({
  speed,
}) => (
  <header className="App-header">
    <img src={logo} className={`App-logo App-logo-${speed}`} alt="logo" />
    <h1 className="App-title">CRA Setup Tutorial</h1>
  </header>
)

Header.propTypes = {
  speed: oneOf([
    'stopped',
    'slow',
    'fast',
  ]).isRequired,
}

export default Header
