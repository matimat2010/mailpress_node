const {
    gulp,
    watch,
    src,
    dest,
} = require('gulp'),
    // const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default,
    replace = require('gulp-replace'),
    mergeStream = require('merge-stream'),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps = require('gulp-sourcemaps'),
    csso = require('gulp-csso'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    svgmin = require('gulp-svgmin'),
    svgSymbols = require('gulp-svg-symbols'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

const dist = '../client';
const paths = {
    styles: {
        src: [
            'scss/**/*.scss',
        ],
        dest: dist,
        filename: 'css.css',
        css: dist + '/style.css'
    },
    scripts: {
        // order matters here. Include in the order they'd need to appear within the final merged .js file.
        src: [
            'js/_plugins/*.js',
            'js/data/**/*.js',
            'js/components/**/*.js',
            'js/routes/**/*.js',
            'js/**/*.js',
            'js/**/**/*.js',
            'js/onload.js',
            '!js/_vendor/*.js',
        ],
        dest: dist + '/js'
    },
    svgs: {
        src: 'svgs/*.svg',
        template: {
            src: 'svgs/svgmin-template.js',
            dest: 'js/data'
        },
        dest: dist + '/svgs',
    },
    copy: {
        src: [
            dist + '/**/*',
            // '!' + dist + '/js/js.js',
            // 'client/**/*.*',
            // 'img',
            // 'img/**/*.*',
            // 'img/**/**/*.*',
            // '!scss',
            // '!svg',
            // '!js',
            // '!_masters',
        ],
        dest: dist
    }
};

// copy shit
function copy() {
    return src(paths.copy.src);
    // .pipe(dest(paths.copy.dest));
}

// scss
function styles() {
    var c = gulp.src(paths.styles.css);
    var s = gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass(
            // { outputStyle: "compressed" }
        ).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(concat(paths.styles.filename));

    return gulp.src([c, s])
        .pipe(concat('style.css'))
        .pipe(dest(paths.styles.dest))
        .pipe(browserSync.stream());


    // return mergeStream(c, s)
    //     .pipe(dest(paths.styles.css))
    //     .pipe(browserSync.stream());
}

// javascript
function scripts(cb) {
    return src(paths.scripts.src)
        .pipe(jshint({ esversion: 6 }))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(plumber())
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(concat('js.js'))
        // .pipe(uglify())
        .pipe(plumber.stop())
        .on("error", function(error) {
            console.log(error.toString());
        })
        .pipe(dest(paths.scripts.dest))
        .on('end', browserSync.reload);
}


function svgs(cb) {

    return src(paths.svgs.src)
        // remove line breaks / tabs
        .pipe(replace(/>\s+/g, '>'))
        // replace all ids with classes
        .pipe(replace(/<(path|rect|circle|g|polygon|polyline) id="/g, function(match) {
            return match.replace(/ id="/g, ' class="');
        }))
        // go back through <defs> and change the classes back to ids
        // .pipe(replace(/<defs><(path|rect|circle|g|polygon|polyline)) class=".+?<\/defs>/g, function(match) {
        //     return match.replace(/ class="/g, ' id="');
        // }))
        // clean up class names
        .pipe(replace(/ class="(.+?)"/g, function(match) {
            var cname = match.replace(' class="', '').replace('"', '');
            if (/^(top|bot|right|left|paper|mailpress|the)/.test(cname)) {
                cname = cname.split('_')[0];
                return ' class="' + cname + '"';
            } else return '';
        }))
        // wrap <clipPath> elements in <defs>. 
        // probably brittle.
        // .pipe(replace(/<defs>(.+)<\/clipPath>/g, function(match) {
        //     return match.split('</defs>').join('') + '</defs>';
        // }))
        // ok, now process svgs
        .pipe(svgmin(function getOptions(file) {
            var collapse = true;
            var cleanup = true;

            return {
                plugins: [
                    { removeViewBox: false },
                    { removeXMLProcInst: true },
                    { removeStyleElement: true },
                    { removeUselessStrokeAndFill: true },
                    { collapseGroups: collapse },
                    // { removeUselessDefs: false },
                    {
                        removeAttrs: {
                            attrs: [
                                'height',
                                'width',
                                'fill',
                                'stroke',
                            ]
                        }
                    },
                    // { cleanupIDs: cleanup }
                ]
            }
        }))
        .on("error", function(err) { cb(err) })
        .pipe(
            svgSymbols({
                templates: [
                    paths.svgs.template.src,
                    // `default-vue`,
                ]
            })
        )
        .pipe(rename({ basename: 'svgs' }))
        .on("error", function(err) { cb(err) })
        .pipe(dest(paths.svgs.template.dest))
        .on('end', browserSync.reload);
}


// watch
function proxy() {

    var proxydir = 'http://localhost:8888/' + (__dirname.split('\\repos\\')[1]).replace(/_src(\/|)/, '') + '/client/';
    // proxydir = 'https://www.jparks.www.us-corp-qa-3.tnqa.net/advertise/test/?v=2';
    // proxydir = 'https://azdailysun.com/test/special-section/?v027';
    // proxydir = 'http://localhost:2090';

    browserSync.init({
        injectChanges: true,
        proxy: proxydir,
        // proxy: 'http://localhost:8888/'+__dirname.split('\\repos\\')[1]+'/dist',
    });

    // watch(paths.scripts.src, scripts);
    // watch(paths.svgs.src, svgs);
    // watch(paths.copy.src, copy).on('change', browserSync.reload);
    watch(paths.copy.src).on('change', browserSync.reload);
}
// gulp.task('styles', styles);
exports.scripts = scripts;
// exports.styles = styles;
exports.copy = copy;
exports.svgs = svgs;
exports.default = proxy;
exports.watch = proxy;