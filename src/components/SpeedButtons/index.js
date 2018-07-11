import React from 'react'
import {
  func,
  string,
} from 'prop-types'

import './styles.css'

const SpeedButtons = ({
  handleClickChangeSpeed,
  speed,
}) => (
  <div className="Speed-buttons-container">
    {
      [
        'stopped',
        'slow',
        'fast',
      ].map((button) => (
        <button
          className="Speed-buttons-button"
          disabled={speed === button}
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
  speed: string.isRequired,
}

export default SpeedButtons
