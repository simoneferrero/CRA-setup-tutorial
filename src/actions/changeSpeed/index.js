import {
  CHANGE_SPEED,
} from './types'

export const changeSpeed = (speed) => ({
  type: CHANGE_SPEED,
  speed,
})
