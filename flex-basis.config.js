const config = {
  theme: {
    'flex-basis': theme => ({
      '1': '100%',
      '2': '50%',
      '3': '33.333333%',
      '4': '25%',
      '5': '20%',
      '6': '16.666666%',
      '7': '14.285714%',
      '8': '12.5%',
    }),
  },
  variants: {
    'flex-basis': ['responsive'],
  },
  plugins: [require('./flex-basis.js')()],
}
