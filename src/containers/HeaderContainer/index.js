import React from 'react'
import {
  string,
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
  speed: string,
  stringifiedStore: string,
  username: string,
}

HeaderContainer.defaultProps = {
  speed: 'slow',
}

const mapStateToProps = (state) => ({
  ...state.logo,
})

export default connect(
  mapStateToProps,
)(HeaderContainer)
