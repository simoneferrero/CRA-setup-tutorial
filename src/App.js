import React from 'react';

import HeaderContainer from 'containers/HeaderContainer'
import LogoControlsContainer from 'containers/LogoControlsContainer'
import StoreDisplayContainer from 'containers/StoreDisplayContainer'

import './styles.css';

const App = () => (
  <div>
    <HeaderContainer />
    <LogoControlsContainer />
    <StoreDisplayContainer />
  </div>
)

export default App;
