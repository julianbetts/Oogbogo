module.exports = function(eleventyConfig) {
    // Copy `css` folder to `_site/css`
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    return {
        dir: {
            input: ".", // Input directory (your project root)
            output: "_site", // Output directory
        }
    };
};