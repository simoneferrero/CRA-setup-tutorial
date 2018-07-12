import React from 'react'
import {
  oneOf,
} from 'prop-types'

import { connect } from 'react-redux'

import Header from 'components/Header'

export const HeaderContainer = ({
  speed,
}) => (
  <Header
    speed={speed}
  />
)

HeaderContainer.propTypes = {
  speed: oneOf([
    'stopped',
    'slow',
    'fast',
  ]),
}

HeaderContainer.defaultProps = {
  speed: 'slow',
}

const mapStateToProps = (state) => ({
  ...state.logoReducer,
})

export default connect(
  mapStateToProps,
)(HeaderContainer)
