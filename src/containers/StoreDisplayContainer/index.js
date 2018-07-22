import { connect } from 'react-redux'

import StoreDisplay from 'components/StoreDisplay'

const mapStateToProps = (state) => ({
  stringifiedStore: JSON.stringify(state, null, 2),
})

export default connect(
  mapStateToProps,
)(StoreDisplay)
