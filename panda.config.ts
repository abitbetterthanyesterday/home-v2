import { defineConfig } from '@pandacss/dev'


export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', '@park-ui/panda-preset'],
  include: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
})