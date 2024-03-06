import type { Config } from "tailwindcss"
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          foreground: 'var(--foreground-primary)',
        },
        secondary: {
          foreground: 'var(--foreground-secondary)',
        },
        tertiary: {
          DEFAULT: 'var(--background-tertiary)',
          foreground: 'var(--foreground-tertiary)',
        },
        quaternary: {
          DEFAULT: 'var(--background-quaternary)',
        }
      },
      backgroundImage: {
        'primary': 'var(--background-primary)',
        'secondary': 'var(--background-secondary)',
      },
      textShadow: {
        sm: '1px 1px 2px var(--tw-shadow-color)',
        DEFAULT: '3px 3px 4px var(--tw-shadow-color)',
      },
      boxShadow: {
        large: '0 0 20px var(--tw-shadow-color)',
      },
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: {matchUtilities: any, theme: any}) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      ),
      matchUtilities(
        {
          'box-shadow': (value: string) => ({
            boxShadow: value,
          }),
        },
        { values: theme('boxShadow') }
      )
    }),
  ],
};
export default config;