module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'url(https://image.ibb.co/gzOBup/showcase.jpg)',
        avatar: "url('./9027145-modified.png)",
      },
      strokeWidth: {
        3: '3',
        4: '4',
        5: '5',
      },
      listStyleType: {
        circle: 'circle',
      },
      screens: {
        m2xl: { max: '1535px' },
        mxl: { max: '1279px' },
        mlg: { max: '1023px' },
        mmd: { max: '767px' },
        msm: { max: '639px' },
      },
    },
  },
  plugins: [],
};