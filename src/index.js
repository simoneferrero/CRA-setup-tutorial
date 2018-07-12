import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from 'reducers/store'
import App from 'App'

import registerServiceWorker from 'utils/registerServiceWorker'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
