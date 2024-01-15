/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      fontSize: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      height: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      width: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      lineHeight: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      margin: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      padding: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      inset: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      borderRadius: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      borderWidth: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      objectFit: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      objectPosition: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
      opacity: {
        '0.3vw': '0.3vw',
        '0.4vw': '0.4vw',
        '0.5vw': '0.5vw',
        'vw': '1vw',
      },
    },
  },
  plugins: [],
}

// Generate classes for vw units from 2vw to 100vw
for (let i = 2; i <= 100; i++) {
  module.exports.theme.extend.fontSize[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.height[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.width[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.lineHeight[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.margin[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.padding[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.inset[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.borderRadius[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.borderWidth[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.objectFit[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.objectPosition[`${i}vw`] = `${i}vw`;
  module.exports.theme.extend.opacity[`${i}vw`] = `${i}vw`;
}