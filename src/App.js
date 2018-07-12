import React from 'react';

import HeaderContainer from 'containers/HeaderContainer'
import SpeedButtonsContainer from 'containers/SpeedButtonsContainer'
import StoreDisplayContainer from 'containers/StoreDisplayContainer'

import './styles.css';

const App = () => (
  <div>
    <HeaderContainer />
    <SpeedButtonsContainer />
    <StoreDisplayContainer />
  </div>
)

export default App;
