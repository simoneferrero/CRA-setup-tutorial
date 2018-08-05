import {
  CHANGE_COLOR,
} from './types'

export const changeColor = (color) => ({
  type: CHANGE_COLOR,
  color,
})
