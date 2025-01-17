import { defineConfig } from "histoire"
import { HstSvelte } from "@histoire/plugin-svelte"

export default defineConfig({
  plugins: [
    HstSvelte(),
  ],
  setupFile: "./histoire.setup.js",
  vite: {
    root: "."
  },
  storyIgnored: ["**/node_modules/**", "**/package/**", "**/dist/**"],
  tree: {
    groups: [
      {
        id: "a",
        title: "",
        include: file => file.path.includes("src/__stories__")
      },
      {
        id: "b",
        title: "Design system"
      },
      {
        id: "c",
        title: "Components",
        include: file => file.path.includes("lib")
      },

    ]
  },
  theme: {
    title: "@specialdoom/proi-ui",
    logo: {
      square: "./src/assets/images/square.svg",
      light: "./src/assets/images/logotype.svg",
      dark: "./src/assets/images/dark-logotype.svg",
    },
    logoHref: "https://github.com/specialdoom/proi-ui",
    favicon: "favicon.ico",
    colors: {
      gray: {
        50: "#EFF1F3",
        100: "#EFF1F3",
        200: "#BCC3C7",
        300: "#BCC3C7",
        400: "#89959B",
        500: "#89959B",
        600: "#55666F",
        700: "#55666F",
        750: "#55666F",
        800: "#223843",
        850: "#223843",
        900: "#223843",
        950: "#223843",
      },
      primary: {
        50: "#D5ECE7",
        100: "#D5ECE7",
        200: "#9DD2C7",
        300: "#9DD2C7",
        400: "#73BFB0",
        500: "#73BFB0",
        600: "#479A89",
        700: "#479A89",
        800: "#357266",
        900: "#357266",
      }
    }
  }
})