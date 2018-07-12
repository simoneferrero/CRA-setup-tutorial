import React from 'react'
import {
  string,
} from 'prop-types'

import { connect } from 'react-redux'

import StoreDisplay from 'components/StoreDisplay'

export const StoreDisplayContainer = ({
  stringifiedStore,
}) => (
  <StoreDisplay
    stringifiedStore={stringifiedStore}
  />
)

StoreDisplayContainer.propTypes = {
  stringifiedStore: string,
}

StoreDisplayContainer.defaultProps = {
  stringifiedStore: '',
}

const mapStateToProps = (state) => ({
  stringifiedStore: JSON.stringify(state, null, 2),
})

export default connect(
  mapStateToProps,
)(StoreDisplayContainer)
