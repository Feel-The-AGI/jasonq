module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"  // explicitly specify includes directory
        }
    };
}; 