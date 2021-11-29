const react = require('@neutrinojs/react');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    react({
      html: {
        title: 'react-package-npm'
      }
    }),
  ],
};
