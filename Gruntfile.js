module.exports = function (grunt) {
	grunt.initConfig({
		less: {
			development: {
				files: {
					"dist/styles/main.css": "src/styles/main.less",
				},
			},
		},
		uglify: {
			build: {
				src: "src/scripts/app.js",
				dest: "dist/scripts/app.min.js",
			},
		},
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-less");

	grunt.registerTask("default", ["uglify", "less"]);
};
