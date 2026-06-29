/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0b0b0b',
        'canvas-soft': '#212121',
        'canvas-light': '#ffffff',
        'canvas-paper': '#ededed',
        'hairline-soft': '#353535',
        hairline: '#ededed',
        'surface-blue-bg': '#afe3ff',
        ink: '#0b0b0b',
        'ink-soft': '#212121',
        graphite: '#353535',
        slate: {
          DEFAULT: '#3c4758',
          soft: '#505b6c',
        },
        mute: '#797979',
        ash: '#b9b9b9',
        'on-primary': '#ffffff',
        brand: '#f36458',
        'brand-deep': '#dd0000',
        'link-blue': {
          DEFAULT: '#0052ef',
          soft: '#55beff',
        },
        success: '#37cd84',
        error: '#dd0000',
        primary: '#0b0b0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        'app-xs': '3px',
        'app-sm': '4px',
        'app-md': '5px',
        'app-lg': '6px',
        marketing: '12px',
      },
      maxWidth: {
        container: '1640px',
      },
    },
  },
  plugins: [],
};
