import {
  createSelector,
} from 'reselect'

export const logoReducerSelector = (state) => state.get('logoReducer')

export const activeLogoSelector = createSelector(
  logoReducerSelector,
  (logoReducer) => logoReducer.get('activeLogo')
)

export const logoSelector = createSelector(
  activeLogoSelector,
  logoReducerSelector,
  (
    activeLogo,
    logoReducer,
  ) => logoReducer.getIn(['logos', activeLogo])
)

export const speedSelector = createSelector(
  logoSelector,
  (logo) => logo && logo.get('speed')
)
