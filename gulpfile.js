const gulp 		   = require("gulp")
const sass 		   = require("gulp-sass")
const pug          = require("gulp-pug")
const htmlmin 	   = require("gulp-htmlmin")
const notify 	   = require("gulp-notify")
const concat 	   = require("gulp-concat")
const uglify 	   = require("gulp-uglify")
const browserSync  = require("browser-sync").create()
const del 		   = require("del")

/* Tasks cached */
gulp.task("cache:css", () =>
    del("./dist/app.css"))
    
gulp.task("cache:js", () => 
    del("./dist/app.js"))
    
gulp.task("sass", ['cache:css'], () => {
    gulp.src("./src/scss/style.scss")
        .pipe(sass({
            outPutStyle: 'compressed'
        }))
        .on('error', notify.onError({
            title: "erro scss", 
            message: "<%= error.message %>"
        }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream())
})

gulp.task("js", ['cache:js'], () =>
    gulp.src(['./src/js/jquery.min.js',
              './src/js/app.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream()))

gulp.task('pug', () => 
  gulp.src('./src/views/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream()))

gulp.task("server", () => {
    browserSync.init({
        server: { baseDir: "./dist" }
    })
       
    gulp.watch("./src/scss/**/*.scss", ['sass'])
    gulp.watch("./src/views/*.pug", ['pug'])
    gulp.watch("./src/js/*.js", ['js'])
})

gulp.task("default", ["sass", "js", "pug", "server"])