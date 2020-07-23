const {dest, watch, series, parallel, src} = require('gulp');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browsersync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

const jsFiles = [
    './src/js/controller/*.js',
    './src/js/model/*.js',
    './src/js/view/*.js',
    './src/js/app.js' 
];


function copyHtml() {
    return src('./src/index.html').pipe(dest('./dist'));
}

function copyJs() {
    return src(jsFiles)
                .pipe(sourcemaps.init())
                .pipe(concat('all.js'))
                .pipe(babel())
                .pipe(uglify())
                .pipe(sourcemaps.write())
                .pipe(dest('./dist'))
}

function copyCss() {
    return src('./src/css/*.css')
                .pipe(concat('styles.css'))
                .pipe(csso())
                .pipe(dest('./dist'))
}

function copyVendors() {
    return src('./node_modules/jquery/dist/jquery.min.js')
                .pipe(concat('vendors.js'))
                .pipe(dest('./dist'));
}

function server(cb) {
    browsersync.init({
        server: {
            baseDir: './dist/'
        }
    })

    watch(jsFiles, series(copyJs, reloadBrowser))
    watch('./src/css/*.css', series(copyCss, reloadBrowser))

    cb();
}

function reloadBrowser(cb) {
    browsersync.reload();
    cb();
}


module.exports.build = parallel(copyHtml, copyCss, copyVendors, copyJs);

module.exports.serve = series(copyHtml, copyCss, copyVendors, copyJs, server)