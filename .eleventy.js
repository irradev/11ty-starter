module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/');
  eleventyConfig.addPassthroughCopy('src/css/');

  eleventyConfig.addWatchTarget('src/css/');

  eleventyConfig.addCollection('posts', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md');
  });

  return {
    dir: {
      input: 'src',
      include: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html', 'css'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
