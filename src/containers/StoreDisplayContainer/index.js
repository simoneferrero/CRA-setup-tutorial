import React from 'react'

import { connect } from 'react-redux'

import StoreDisplay from 'components/StoreDisplay'

export const StoreDisplayContainer = ({
  stringifiedStore,
}) => (
  <StoreDisplay
    stringifiedStore={stringifiedStore}
  />
)

StoreDisplayContainer.propTypes = StoreDisplay.propTypes

StoreDisplayContainer.defaultProps = StoreDisplay.defaultProps

const mapStateToProps = (state) => ({
  stringifiedStore: JSON.stringify(state, null, 2),
})

export default connect(
  mapStateToProps,
)(StoreDisplayContainer)
