const path = require('path');
const glob = require('glob');

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
    assetsDir: 'assets',
    rollupOptions: {
      input: [
        'src/index.html',
        'src/contact.html',
        'src/privacy.html',
        'src/projects.html',
        'src/resume.html',
        'src/terms.html',
        ...glob.sync('src/docs/**/*.{html,htm,txt,pdf}'), // Include PDF files
        ...glob.sync('src/img/**/*.{jpg,jpeg,png,gif,svg}'),
      ],
    },
  },
}