import {
  change_speed,
} from 'actions/changeSpeed/constants'

import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case change_speed:
      return {
        ...initialState,
        speed: action.speed,
      }

    default:
      return state
  }
}
