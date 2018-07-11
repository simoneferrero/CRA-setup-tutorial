import {
  change_speed,
} from './constants'

export const changeSpeed = (speed) => ({
  type: change_speed,
  speed,
})
