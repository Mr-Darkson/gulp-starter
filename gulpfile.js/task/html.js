const { dest, src } = require("gulp");
const path = require("../config/path");
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const fileInclude = require ('gulp-file-include'); //WIKI: https://www.npmjs.com/package/gulp-file-include

const html = () => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "HTML",
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(dest(path.html.dest))
}

module.exports = html;