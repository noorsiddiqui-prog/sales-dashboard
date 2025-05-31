import type { Config } from 'tailwindcss';
import theme from "./src/styles/theme/Theme";

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme,
  plugins: [],
};

export default config;
