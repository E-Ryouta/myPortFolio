module.exports = {
  content: ['./src/pages/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      base: '#A6BDB0',
      primary: '#015958',
      secondary: '#143838',
      white: '#FFFFFF',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.03em' }],
      sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.03em' }],
      lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.03em' }],
      xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.03em' }],
      '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.03em' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0.03em' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.03em' }],
      '5xl': ['3rem', { lineHeight: '1', letterSpacing: '0.03em' }],
    },
    animation: {
      'shadow-inset-center':
        'shadow-inset-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
    },
    keyframes: {
      'shadow-inset-center': {
        '0%': {
          'box-shadow': 'inset 0 0 0 0 transparent',
        },
        to: {
          'box-shadow': 'inset 0 0 14px 0 rgba(0, 0, 0, .5)',
        },
      },
    },
  },
  plugins: [],
};
