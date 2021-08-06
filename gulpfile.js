/* eslint-disable no-sparse-arrays */
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifyJs = require('gulp-uglify-es').default

gulp.task('js', () => {
    const srcJsPolify = [
        './public/js/html5shiv.js',
        './public/js/respond.js',
        './public/js/selectivizr.js',
        './public/js/respimage.js',
    ]
    const srcJquery = [
        './public/js/acessibilidade.js',
        './public/js/loading.js',
    ]
    const distJs = ['./dist/assets/scripts/js/']
    gulp.src(srcJquery).pipe(gulp.dest(distJs))

    return gulp
        .src(srcJsPolify)
        .pipe(concat('allPolify.js'))
        .pipe(gulp.dest(distJs))
})
gulp.task('polifys', () => {
    const distJs = ['./public/js/']
    return gulp
        .src('./public/js/allPolify.js')
        .pipe(uglifyJs())
        .pipe(gulp.dest(distJs))
})
gulp.task('build', gulp.series('js', 'polifys'))
