const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/showcase.jpeg')",
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
        xs: '475px',
      },
      gridTemplateColumns: {
        libs: 'repeat(auto-fill, minmax(18rem, 1fr))',
        libslg: 'repeat(auto-fill, minmax(23rem, 1fr))',
        projects: 'repeat(auto-fill, minmax(18rem, 1fr))',
        projectslg: 'repeat(auto-fill, minmax(26rem, 1fr))',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        logo: ["'Freehand', cursive"],
      },
      keyframes: {
        wiggle: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        show: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        rubber: {
          from: {
            transform: 'scale3d(1, 1, 1)',
          },

          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },

          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },

          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },

          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },

          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },

          to: {
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s cubic-bezier(0.1, -0.6, 0.2, 0);',
        show: 'show 0.3s cubic-bezier(0.1, -0.6, 0.2, 0);',
        rubber: 'rubber 1s cubic-bezier(0.1, -0.6, 0.2, 0);',
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
