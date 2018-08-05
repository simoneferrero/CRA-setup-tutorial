import {
  fromJS,
  Record,
} from 'immutable'

export const LogoRecord = new Record({
  color: undefined,
  height: 80,
  icon: undefined,
  speed: 'slow',
})

export default fromJS({
  activeLogo: 'reactLogo',
  logos: {
    reactLogo: new LogoRecord({
      color: '#61DAFB',
    }),
  },
})
