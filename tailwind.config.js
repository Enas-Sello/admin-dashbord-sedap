module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: ['class'],
  theme: {
    extend: {
      margin: {
        320: '320px',
      },
      width: {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
      },
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
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
      },
      transitionProperty: {
        height: 'height',
      },
      dropShadow: {
        main: '0px 4px 4px rgba(0, 0, 0, 0.04)',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  plugins: [],
};
