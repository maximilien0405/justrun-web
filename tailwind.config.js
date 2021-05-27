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
        gray_light_hover: '#323339',
        gray_background_dark: "#202225",
        gray_subtitle: "#AAAAAB",
        gray_subtitle_hover: '#dddddd',
        blue_border: "#CDF6FF",
        blue_button: "#12606D",
        blue_button_hover: "#105662",
      },
      transitionDuration: {
        'special': '100ms',
       },
      borderWidth: {
        lign: '0.0938rem',
        big: '2.5rem',
      },
      padding: {
        '13': '3.25rem',
        'special': '2.5rem',
      },
      height: {
        '18': '4.6875rem',
      },
      width: {
        '15': '3.75rem',
        '18': '4.6875rem',
        'lign':'0.0625rem',
      },
      margin: {
        'footer': '8.75rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
