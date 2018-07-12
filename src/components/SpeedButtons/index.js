import React from 'react'
import {
  func,
  oneOf,
} from 'prop-types'

import './styles.css'

const SpeedButtons = ({
  handleClickChangeSpeed,
  speed,
}) => (
  <div className="Speed-buttons-container">
    <p>Change the speed of the logo</p>
    {
      [
        'stopped',
        'slow',
        'fast',
      ].map((button) => (
        <button
          className="Speed-buttons-button"
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

SpeedButtons.propTypes = {
  handleClickChangeSpeed: func.isRequired,
  speed: oneOf([
    'stopped',
    'slow',
    'fast',
  ]).isRequired,
}

export default SpeedButtons
