import { CHANGE_SPEED } from 'actions/changeSpeed/types'
import { SET_ACTIVE_LOGO } from 'actions/setActiveLogo/types'

import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SPEED:
      return state.setIn(['logos', 'reactLogo', 'speed'], action.speed)

    case SET_ACTIVE_LOGO: {
      return state.set('activeLogo', action.logo)
    }

    default:
      return state
  }
}
