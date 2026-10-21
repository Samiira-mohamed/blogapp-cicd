const js = require('@eslint/js')
const globals = require('globals')

module.exports = [
  { ignores: ['dist/**', 'bloglist-frontend/**', 'node_modules/**'] },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
  },
]
