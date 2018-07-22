import { connect } from 'react-redux'

import Header from 'components/Header'

const mapStateToProps = ({ logoReducer }) => ({
  ...logoReducer,
})

export default connect(
  mapStateToProps,
)(Header)
