import React from 'react'

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

SpeedButtonsContainer.propTypes = SpeedButtons.propTypes

SpeedButtonsContainer.defaultProps = SpeedButtons.defaultProps

const mapStateToProps = ({ logoReducer }) => ({
  ...logoReducer,
})
const mapDispatchToProps = (dispatch) => ({
	handleClickChangeSpeed: (username) => dispatch(changeSpeed(username)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpeedButtonsContainer)
