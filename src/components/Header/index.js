import React from 'react'
import {
  string,
} from 'prop-types'

import logo from 'icons/logo.svg'

import './styles.css'

const Header = ({
  speed,
}) => (
  <header className="App-header">
    <img src={logo} className={`App-logo App-logo-${speed}`} alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
)

Header.propTypes = {
  speed: string.isRequired,
}

export default Header
