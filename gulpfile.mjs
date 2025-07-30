import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';

const sass = gulpSass(dartSass);

function compileSass() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function compressImages() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function compressJs() {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function watchFiles() {
    gulp.watch('./src/scss/**/*.scss', compileSass);
    gulp.watch('./src/js/**/*.js', compressJs);
    gulp.watch('./src/images/*', compressImages);
};

export const build = gulp.parallel(compileSass, compressImages, compressJs);
export const watch = watchFiles;

export default build;