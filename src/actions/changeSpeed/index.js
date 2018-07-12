import {
  CHANGE_SPEED,
} from './constants'

export const changeSpeed = (speed) => ({
  type: CHANGE_SPEED,
  speed,
})
