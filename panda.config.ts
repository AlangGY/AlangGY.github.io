import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./modules/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            DEFAULT: { value: "{colors.green.800}" },
          },
        },
      },
      semanticTokens: {
        colors: {
          link: {
            DEFAULT: { value: "{colors.black}" },
            hover: { value: "{colors.blue.500}" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
