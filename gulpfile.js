'use strict';
var gulp = require('gulp'),
	webpack = require('webpack'),
	jshint = require('gulp-jshint'),
	nodemon = require("nodemon");

// gulp.task('lint', function () {
//   gulp.src('./*/**.js')
//     .pipe(jshint())
// })
var bundler = webpack(config);

gulp.task("nodemon", function() {
    nodemon({
        delay: "200ms",
        script: "app.js",
        verbose: true,
        stdout: false,
        watch: [
            "server/controller","server/mock", "server/lib", "server/*.js", "view",
        ],
        ext: "js html json es6 jsx"
    }).on("readable", function(data) {
        this.stdout.on('data', function(chunk) {
            process.stdout.write(chunk);
        });
        this.stderr.pipe(process.stderr);
    });
});

gulp.task('start', ['nodemon'], function () {
	nodemon({
		script: './test/server.js',
		verbose: true,
		env: {
        	'NODE_ENV': 'development'
    	},
    	watch: './',
    	ext: 'js coffee'
    }).on('restart', 'cssmin')
})
