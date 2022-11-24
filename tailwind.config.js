module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      flex: {
        0.7: '0.7 1 0%',
      },
      maxHeight: {
        370: '370px',
      },
      minWidth: {
        280: '280px',
        350: '350px',
        620: '620px',
      },
      textColor: {
        lightGreen: 'rgba(0, 176, 116, 0.15)',
        lightRed: 'rgba(255, 91, 91, 0.15)',
        lightBlue: 'rgba(45, 156, 219, 0.15)',
        lightGray: '#5E6C93',
        lightYellow: 'rgba(247, 198, 4, 0.15)',
        mainGreen: '#00B074',
        mainRed: '#FF5B5B',
        mainBlue: '#2D9CDB',
        mainGray: 'rgba(94, 108, 147, 0.15)',
        mainYellow: '#F7C604',
        darkMode: '#1F1E26',
        lightDark: '#464255',
      },
      backgroundColor: {
        lightGreen: 'rgba(0, 176, 116, 0.15)',
        lightRed: 'rgba(255, 91, 91, 0.15)',
        lightBlue: 'rgba(45, 156, 219, 0.15)',
        lightGray: '#5E6C93',
        lightYellow: 'rgba(247, 198, 4, 0.15)',

        mainGreen: '#00B074',
        mainRed: '#FF5B5B',
        mainBlue: '#2D9CDB',
        mainGray: 'rgba(94, 108, 147, 0.15)',
        mainYellow: '#F7C604',
        darkMode: '#1F1E26',
        lightDark: '#464255',
      },
      colors: {
        lightGreen: 'rgba(0, 176, 116, 0.15)',
        lightRed: 'rgba(255, 91, 91, 0.15)',
        lightBlue: 'rgba(45, 156, 219, 0.15)',
        lightGray: '#5E6C93',
        lightYellow: 'rgba(247, 198, 4, 0.15)',

        mainGreen: '#00B074',
        mainRed: '#FF5B5B',
        mainBlue: '#2D9CDB',
        mainGray: 'rgba(94, 108, 147, 0.15)',
        mainYellow: '#F7C604',
        darkMode: '#1F1E26',
        lightDark: '#464255',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  plugins: [],
};
