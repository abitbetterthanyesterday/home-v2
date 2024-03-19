import { defineConfig } from '@pandacss/dev'
import {createPreset} from "@park-ui/panda-preset";


export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets',  createPreset({
    accentColor: 'amber',
    grayColor: 'sand',
    borderRadius: 'md',
  }),],
  include: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
  staticCss: {
    recipes: {
      card: ["*"]
    }
  }
})