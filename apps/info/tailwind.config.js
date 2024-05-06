const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(
      __dirname,
      './libs/info-components/{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'primary-700': 'var(--primary-700, #002664)',
        'primary-500': 'var(--primary-500, #1D69B4)',
        'status-ontime': 'var(--status-ontime, #28A745)',
        'status-late': 'var(--status-late, #DC3545)',
        'status-early': 'var(--status-early, #FFC107)',
        'status-unknown': 'var(--status-unknown, #007BFF)',
        'neutral-50': 'var(--neutral-50, #F6F6F6)',
        'neutral-100': 'var(--neutral-50, #ECECEC)',
        'neutral-300': 'var(--neutural-300,#CDD3D6)',
        'neutral-500': 'var(--neutral-50, #555555)',
      },
    },
  },
  plugins: [],
};
