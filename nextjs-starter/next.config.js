const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCSS({
  publicRuntimeConfig: {
    cssModules: true,
    cloudinaryKey: 'tbd...'
  },
  env: {
    YELP_KEY:
      'DQMs_qNQqV6tg1s9eXF9o1P8R6koNTXHFUcqCgwy-9-bIQzxTTCuMX0dzChkpX9jI64PLJPIOjpWfLUSJNC7MCTqPfmjlpSUUxb6f07j-8x0YgAID7LGn4KcUlqpW3Yx'
  }
});
