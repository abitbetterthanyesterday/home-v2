import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths'
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  plugins: [tsconfigPaths({ root: './' })],
  integrations: [react()]
});