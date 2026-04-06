import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    overrides: {
      'e18e/prefer-static-regex': 'off',
    },
  },
})
