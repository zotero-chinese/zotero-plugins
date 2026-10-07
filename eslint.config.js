import antfu from '@antfu/eslint-config'

export default antfu({
  test: false,
  typescript: {
    overrides: {
      'e18e/prefer-static-regex': 'off',
    },
  },
})
