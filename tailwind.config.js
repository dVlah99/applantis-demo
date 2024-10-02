module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#49B6F9',
        customPurple: '#7B10FF',
        customPink: '#F10BE7',
      },
    },
  },
  plugins: [],
}
