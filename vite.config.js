const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'src',
    rollupOptions: {
      input: [
        'src/index.html',
        'src/contact.html',
        'src/privacy.html',
        'src/projects.html',
        'src/resume.html',
        'src/terms.html',
      ], // Specify each HTML file individually
    },
  },
}