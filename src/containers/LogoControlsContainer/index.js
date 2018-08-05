import { connect } from 'react-redux'

import {
  colorSelector,
  speedSelector,
} from 'reducers/logoReducer/selectors'

import { changeColor } from 'actions/changeColor'
import { changeSpeed } from 'actions/changeSpeed'

import LogoControls from 'components/LogoControls'

const mapStateToProps = (state) => ({
  color: colorSelector(state),
  speed: speedSelector(state),
})
const mapDispatchToProps = (dispatch) => ({
	handleChangeChangeColor: (color) => dispatch(changeColor(color)),
	handleClickChangeSpeed: (speed) => dispatch(changeSpeed(speed)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoControls)
