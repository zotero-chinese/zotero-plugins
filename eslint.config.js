import antfu from '@antfu/eslint-config'

export default antfu({
  javascript: {
    overrides: {
      'no-console': 'off',
    },
  },
})
