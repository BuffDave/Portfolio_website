const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': './node_modules/bootstrap', // Use a relative path
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  build: {
    outDir: 'src', // Output directory for built application
    emptyOutDir: false // Do not empty the outDir on build
  }
}