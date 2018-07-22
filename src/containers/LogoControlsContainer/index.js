import { connect } from 'react-redux'

import {
  changeSpeed,
} from 'actions/changeSpeed'

import LogoControls from 'components/LogoControls'

const mapStateToProps = ({ logoReducer }) => ({
  ...logoReducer,
})
const mapDispatchToProps = (dispatch) => ({
	handleClickChangeSpeed: (speed) => dispatch(changeSpeed(speed)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoControls)
