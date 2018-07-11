import {
  createStore,
  // applyMiddleware,
} from 'redux'

import rootReducer from 'reducers/rootReducer'

export default (initialState = {}) => createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
