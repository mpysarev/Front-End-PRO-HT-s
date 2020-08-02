const {dest, src, parallel, watch, series} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const browsersync = require('browser-sync').create();

function copyHtml() {
    return src('./src/index.html').pipe(dest('./dist/'));
}

function copyJs() {
    return src('./src/js/*.js')
                .pipe(concat('all.js'))
                .pipe(babel())
                .pipe(uglify())
                .pipe(dest('./dist'));
}

function copyCss() {
    return src('./src/css/*.css')
                .pipe(csso())
                .pipe(concat('styles.css'))
                .pipe(dest('./dist'));
}

function copyVendors() {
    return src('./node_modules/jquery/dist/jquery.min.js')
                .pipe(concat('vendors.js'))
                .pipe(dest('./dist'));
}

function watchFiles(cb) {
    watch('./src/js/*.js', copyJs);
    watch('./src/css/*.css', copyCss);

    cb();
}

function server(cb) {
    browsersync.init({
        server: {
            baseDir: './dist/'
        }
    });

    watch('./src/js/*.js', series(copyJs, reloadBrowser));
    watch('./src/css/*.css', series(copyCss, reloadBrowser));

    cb();
}

function reloadBrowser(cb) {
    browsersync.reload();
    cb();
}

module.exports.build = parallel(copyHtml, copyCss, copyVendors, copyJs);
module.exports.watch = series([copyHtml, copyCss, copyVendors, copyJs, watchFiles]);

module.exports.serve = series(copyHtml, copyCss, copyVendors, copyJs, server)