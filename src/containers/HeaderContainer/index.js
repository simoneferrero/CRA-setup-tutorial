import { connect } from 'react-redux'

import toJS from 'utils/toJS'

import {
  logoSelector,
} from 'reducers/logoReducer/selectors'

import Header from 'components/Header'

const mapStateToProps = (state) => ({
  logo: logoSelector(state),
})

export default connect(
  mapStateToProps,
)(toJS(Header))
