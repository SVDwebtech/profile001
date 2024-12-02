module.exports = {
      proxy: "http://localhost:5000/portfolio",
      files: [
          "css/*.css",
          "views/*.ejs",
          "public/js/**/*.js",
          "public/portfolio/styles/*.css"
      ],
      injectChanges: true,
      notify: true
  };  