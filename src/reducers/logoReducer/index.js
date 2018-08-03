import {
  CHANGE_SPEED,
} from 'actions/changeSpeed/types'

import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SPEED:
      return state.setIn(['logos', 'reactLogo', 'speed'], action.speed)

    default:
      return state
  }
}
