import {
  createStore,
} from 'redux'

import {
  fromJS,
} from 'immutable'

import rootReducer from 'reducers/rootReducer'

export default (initialState = fromJS({})) => createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
