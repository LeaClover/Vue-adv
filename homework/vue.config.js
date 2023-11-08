const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    blog: {
      entry: './src/pages/BlogPage/main.js',
      template: 'public/index.html',
      title: 'Blog',
      chunks: ['chunk-vendors', 'chunk-common', 'blog']
    },
    blogdetails: {
      entry: './src/pages/BlogDetails/main.js',
      tamplate: 'public/index.html',
      title: 'Blog-Details',
      chunks: ['chunk-vendors', 'chunk-common', 'blogdetails']
    },
    project: {
      entry: './src/pages/ProjectPage/main.js',
      tamplate: 'public/index.html',
      title: 'Project',
      chunks: ['chunk-vendors', 'chunk-common', 'project']
    }
  }
}
