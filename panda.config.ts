import { defineConfig } from '@pandacss/dev'
import {createPreset} from "@park-ui/panda-preset";


export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets',  createPreset({
    accentColor: 'iris',
    grayColor: 'slate',
    borderRadius: 'sm',
  }),],
  include: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
})