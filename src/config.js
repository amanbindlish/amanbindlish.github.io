module.exports = {
  siteTitle: 'Aman Bindlish | Frontend Engineer',
  siteDescription:
    'Aman Bindlish is into Software development for more than 7 years, specialised in building smartphone applications leading towards Business Intelligence and Data Analytics to make the businesses or firms achieve new levels of innovations.',
  siteKeywords:
    'Aman Bindlish, Aman, Bindlish, amanbindlish, aman-bindlish, software engineer, front-end engineer, web developer, javascript, indian, android engineer, mobile engineer, android developer',
  siteUrl: 'https://amanbindlish.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-167448072-1',
  googleVerification: '',
  name: 'Aman Bindlish',
  location: 'Singapore',
  email: 'amanbindlish@gmail.com',
  github: 'https://github.com/amanbindlish',
  twitterHandle: '@bindlishaman',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/amanbindlish',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aman-bindlish/',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@amanbindlish',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/its_bindlish',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/bindlishaman',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
