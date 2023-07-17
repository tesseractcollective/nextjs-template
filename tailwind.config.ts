

import type { Config } from 'tailwindcss'
module.exports = {
  postcss: true,
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    './app/routes/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      orange: {
        100: '#FFA500',
      },
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    // safelist: [
    //   {
    //     pattern: /.*/
    //   }
    // ],
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        '128': '32rem',
        '240': '60rem',
        '256': '64rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        "primary": "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-fade": "var(--primary-fade)",
        "primary-fade-opacity": "var(--primary-fade-opacity)",
        "white": "var(--white)",
        "dark": "var(--dark)"
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-out-down': {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-out-up': {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-gradients'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config