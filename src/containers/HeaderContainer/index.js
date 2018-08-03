import { connect } from 'react-redux'

import toJS from 'utils/toJS'

import {
  reactLogoSelector,
} from 'reducers/logoReducer/selectors'

import Header from 'components/Header'

const mapStateToProps = (state) => ({
  logo: reactLogoSelector(state),
})

export default connect(
  mapStateToProps,
)(toJS(Header))
