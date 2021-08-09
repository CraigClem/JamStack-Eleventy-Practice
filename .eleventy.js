module.exports = function (config) {

  //? addPassthroughCopy is a method that takes a folder file as an argument so that eleventy can run JavaScript as it does not read .js files to add to the dist folder. 

  config.addPassthroughCopy('src/js');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data'
    }
  };
}