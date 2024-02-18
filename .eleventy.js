module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		'./src/main.css': 'bundle.css',
        './src/assets/github.svg': 'github.svg'
	});

	return {
		dir: {
			input: 'src',
			output: 'build'
		}
	};
};
