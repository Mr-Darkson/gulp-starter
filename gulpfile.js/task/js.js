const { dest, src } = require("gulp");
const path = require("../config/path");
const app = require("../config/app");
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const babel = require('gulp-babel') //доступность для старых браузеров
const webpack = require('webpack-stream'); //сжатие + модульность



const js = () => {
    return src(path.js.src, {sourcemaps: true})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "JavaScript",
                message: error.message
            }))
        }))
        .pipe(babel())
        .pipe(webpack(app.webpack))
        .pipe(dest(path.js.dest, {sourcemaps: true}))
}

module.exports = js;