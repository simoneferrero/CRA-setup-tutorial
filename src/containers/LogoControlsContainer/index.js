import { connect } from 'react-redux'

import {
  speedSelector,
} from 'reducers/logoReducer/selectors'

import {
  changeSpeed,
} from 'actions/changeSpeed'

import LogoControls from 'components/LogoControls'

const mapStateToProps = (state) => ({
  speed: speedSelector(state),
})
const mapDispatchToProps = (dispatch) => ({
	handleClickChangeSpeed: (speed) => dispatch(changeSpeed(speed)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoControls)
