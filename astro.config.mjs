import { defineConfig } from 'astro/config';

export default defineConfig({
  // Output static HTML files
  output: 'static',
  // Build configuration
  build: {
    // Generate clean URLs without .html extension
    format: 'directory'
  },
  // Vite configuration for asset handling
  vite: {
    build: {
      // Don't inline small assets - keep them as files
      assetsInlineLimit: 0
    }
  }
});
