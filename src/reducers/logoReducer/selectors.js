import {
  createSelector,
} from 'reselect'

export const logoReducerSelector = (state) => state.get('logoReducer')

export const reactLogoSelector = createSelector(
  logoReducerSelector,
  (logoReducer) => logoReducer.getIn(['logos', 'reactLogo'])
)

export const speedSelector = createSelector(
  reactLogoSelector,
  (reactLogo) => reactLogo.get('speed')
)
