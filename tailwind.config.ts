import type { Config } from "tailwindcss"


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
        }
      },
      backgroundImage: {
        'primary': 'var(--background-primary)',
        'secondary': 'var(--background-secondary)',
      },
    }
  },
  plugins: [],
};
export default config;