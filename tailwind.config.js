/* global module */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        English: ['ErasBoldITC'],
        GameNumber: ['crimsondestroyersemital'],
        Score: ['Bugfast'],
      },
      colors: {
        text50: '#FFFFFF',
        text75: '#F0F2F4',
        text80: '#D5D5D5',
        text100: '#D9D9D9',
        text150: '#BAB6B7',
        text200: '#797979',
        text300: '#023047',
        text400: '#4E4E4E',
        text500: '#000000',
        brown: '#8A2900',
        red: '#FF2E00',
        red2: '#EC0000',
        orange: '#FF9534',
        orange2: '#FB8500',
        orange3: '#FFB703',
        yellow: '#FFB703',
        ivory: '#FFF3B1',
        ivory2: '#FFF7B4',
        lime: '#B3DF5A',
        lightblue: '#71A7C0',
        lightblue2: '#8ECAE6',
        good: '#40E783',
        great: '#7747FF',
        perfect: '#FF477E',
      },
      backgroundImage: {
        main: "url('./assets/images/homeBackgroundImage.png')",
        break_effect: "url('./assets/images/ending/break-effect.png')",
        no_break_effect: "url('./assets/images/ending/no-break-effect.png')"
      },
    },
  },
  plugins: [],
};
