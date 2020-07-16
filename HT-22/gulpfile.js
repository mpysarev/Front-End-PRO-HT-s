const {dest, src, parallel} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const csso = require('gulp-csso');

function copyHtml() {
    return src('./src/index.html').pipe(dest('./dist/'));
}

function copyJs() {
    return src('./src/js/*.js')
                .pipe(uglify())
                .pipe(concat('all.js'))
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


module.exports.build = parallel(copyHtml, copyCss, copyVendors, copyJs);