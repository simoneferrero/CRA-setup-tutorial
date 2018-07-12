import React from 'react'
import {
  func,
  oneOf,
} from 'prop-types'

import { connect } from 'react-redux'

import {
  changeSpeed,
} from 'actions/changeSpeed'

import SpeedButtons from 'components/SpeedButtons'

export const SpeedButtonsContainer = ({
  handleClickChangeSpeed,
  speed,
}) => (
  <SpeedButtons
    handleClickChangeSpeed={handleClickChangeSpeed}
    speed={speed}
  />
)

SpeedButtonsContainer.propTypes = {
  handleClickChangeSpeed: func,
  speed: oneOf([
    'stopped',
    'slow',
    'fast',
  ]).isRequired,
}

SpeedButtonsContainer.defaultProps = {
  handleClickChangeSpeed: () => {},
  speed: 'slow',
}

const mapStateToProps = (state) => ({
  ...state.logoReducer,
})
const mapDispatchToProps = (dispatch) => ({
	handleClickChangeSpeed: (username) => dispatch(changeSpeed(username)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpeedButtonsContainer)
