module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white_light: "#F3F4F6",
        gray_background_light: "#37393F",
        gray_background_dark: "#202225",
        gray_subtitle: "#AAAAAB",
        blue_border: "#CDF6FF",
        blue_button: "#12606D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
