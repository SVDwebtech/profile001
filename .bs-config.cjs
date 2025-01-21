module.exports = {
      proxy: "http://localhost:5000/",
      files: [
          "views/*.ejs",
          "public/css/**/*.css",
          "public/portfolio/styles/*.css",
          "public/js/**/*.js"
      ],
      injectChanges: true,
      notify: true
  };  