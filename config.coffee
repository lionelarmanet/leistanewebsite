module.exports = config:
  files:
    javascripts: 
      joinTo: 
        'scripts/nav.js'
    stylesheets: 
      joinTo: 
        'styles/style.css'
    templates: 
      joinTo:  
        'index.html'
  paths: 
   watched: ['main']
   public: 'dist'