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
      }
    },
  },
  plugins: [],
};
