import defaultTheme from 'tailwindcss/defaultTheme';

const theme = {
  extend: {
    colors: {
      // background: "var(--background)",
      foreground: "var(--foreground)",
      primary: "var(--primary)",
      "primary-hover": "var(--primary-hover)",
      accent: "var(--accent)",
      border: "var(--border)",
      card: "var(--card)",
      muted: "var(--muted)",
      toggleColor: "var(--toggle-color)",
      iconColor: "var(--icon-color)",
      hoverIconColor: "var(--hover-icon-color)",
      menuBtnColor: "var(--menu-button-color)",
      beh3: "var(--beh3)",
      background: {
        light: 'gray',
        dark: '#1a1a1a',
      },
      text: {
        light: 'green',
        dark: '#f1f1f1',
      },
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },
};

export default theme;
