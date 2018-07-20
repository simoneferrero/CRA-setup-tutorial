import React from 'react'

import { connect } from 'react-redux'

import Header from 'components/Header'

export const HeaderContainer = ({
  speed,
}) => (
  <Header
    speed={speed}
  />
)

HeaderContainer.propTypes = Header.propTypes

HeaderContainer.defaultProps = Header.defaultProps

const mapStateToProps = ({ logoReducer }) => ({
  ...logoReducer,
})

export default connect(
  mapStateToProps,
)(HeaderContainer)
