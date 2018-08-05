import React from 'react'
import {
  func,
  oneOf,
  string,
} from 'prop-types'

import './styles.css'

const LogoControls = ({
  color,
  handleChangeChangeColor,
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
    <p>Change the color of the logo</p>
    <input
      onChange={(event) => handleChangeChangeColor(event.target.value)}
      value={color}
    />
  </div>
)

LogoControls.propTypes = {
  color: string,
  handleChangeChangeColor: func,
  handleClickChangeSpeed: func,
  speed: oneOf([
    'stopped',
    'slow',
    'fast',
  ]),
}

LogoControls.defaultProps = {
  color: '',
  handleChangeChangeColor: () => {},
  handleClickChangeSpeed: () => {},
  speed: 'slow',
}

export default LogoControls
