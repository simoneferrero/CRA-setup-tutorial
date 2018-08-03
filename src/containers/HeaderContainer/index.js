import { connect } from 'react-redux'

import Header from 'components/Header'

const mapStateToProps = (state) => ({
  speed: state.getIn(['logoReducer', 'speed']),
})

export default connect(
  mapStateToProps,
)(Header)
