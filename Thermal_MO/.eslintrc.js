module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['eslint:recommended','@nuxtjs','standard','plugin:nuxt/recommended', 'prettier',],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {},
  globals: {
    $: 'readonly',
    moment: 'readonly'
  }
}
