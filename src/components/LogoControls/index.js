import React from 'react'
import {
  func,
  oneOf,
} from 'prop-types'

import './styles.css'

const LogoControls = ({
  handleClickChangeSpeed,
  speed,
}) => (
  <div className="Logo-controls-container">
    <p>Change the speed of the logo</p>
    {
      [
        'stopped',
        'slow',
        'fast',
      ].map((button) => (
        <button
          className="Logo-controls-button"
          disabled={speed === button}
          key={button}
          onClick={() => handleClickChangeSpeed(button)}
        >
          { button }
        </button>
      ))
    }
  </div>
)

LogoControls.propTypes = {
  handleClickChangeSpeed: func,
  speed: oneOf([
    'stopped',
    'slow',
    'fast',
  ]),
}

LogoControls.defaultProps = {
  handleClickChangeSpeed: () => {},
  speed: 'slow',
}

export default LogoControls
