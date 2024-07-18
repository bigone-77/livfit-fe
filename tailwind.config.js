/* global module */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        English: ['ErasBoldITC'],
        GameNumber: ['crimsondestroyersemital'],
        Score: ['Bugfast']
      },
      colors: {
        text50: '#FFFFFF',
        text75: '#F0F2F4',
        text80: '#D5D5D5',
        text100: '#D9D9D9',
        text200: '#797979',
        text300: '#023047',
        text500: '#000000',
        brown: '#8A2900',
        orange: '#FF9534',
        yellow: '#FFB703',
        ivory: '#FFF3B1',
        ivory2: '#FFF7B4',
        lime: '#B3DF5A',
      },
      backgroundImage: {
        main: "url('./assets/images/homeBackgroundImage.png')",
      },
    },
  },
  plugins: [],
};
