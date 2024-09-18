// Export a function that configures Eleventy
module.exports = function(eleventyConfig) {
    // Copy the `assets/` directory to the `_site/assets` directory
    eleventyConfig.addPassthroughCopy("assets");
  
    // Return an object to configure directory settings
    return {
      dir: {
        // Specify the input directory for Eleventy
        input: "content",
        // Specify the includes directory for Eleventy
        includes: "../_includes",
        // Specify the output directory for Eleventy
        output: "_site"
      }
    };
  };