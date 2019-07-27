const _ = require('lodash')

module.exports = function() {
  return function({ addUtilities, e, theme, variants }) {
    const generators = [
      (value, modifier) => ({
        [`.${e(`flex-basis-${modifier}`)}`]: { 'flex-basis': `${value}` },
      }),
    ]

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme('flex-basis'), generator)
    })
    addUtilities(utilities, variants('flex-basis'))
  }
}
