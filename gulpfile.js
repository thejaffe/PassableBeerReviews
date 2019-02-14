"use strict";

var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
var del = require("del");
var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var sass = require("gulp-sass");
var tsc = require("gulp-typescript");
var uglify = require("gulp-uglify-es").default;

const AUTOPREFIXER_BROWSERS = [
  "ie >= 10",
  "ie_mob >= 10",
  "ff >= 30",
  "chrome >= 34",
  "safari >= 7",
  "opera >= 23",
  "ios >= 7",
  "android >= 4.4",
  "bb >= 10"
];

const tsOptions = {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": false,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
        "*": [
            "node_modules/*"
        ]
    }
}

const clean = () => del(["dist"]);

const styles = (done) => {
  gulp.src("./src/public/stylesheets/main.scss")
      .pipe(sass({
        outputStyle: "nested",
        precision: 10,
        includePaths: ["."],
        onError: console.error.bind(console, "Sass error:")
      }))
      .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
      .pipe(csso())
      .pipe(gulp.dest("./dist/public/stylesheets"));
  done();
}

const transpile = (done) => {
  gulp.src("./src/**/*.ts")
      .pipe(tsc(tsOptions))
      .pipe(uglify())
      .pipe(gulp.dest("./dist"));
  done();
}

const views = (done) => {
  gulp.src(["./src/**/*.html", "./src/**/*.ejs"])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest("./dist"));
  done();
}

const images = (done) => {
  gulp.src("./src/public/images/*")
      .pipe(gulp.dest("./dist/public/images"));
  done();
}

const others = (done) => {
  gulp.src("./src/public/js/*.js")
      .pipe(gulp.dest("./dist/public/js"));
  gulp.src(["./src/public/*.xml", "./src/public/*.txt", "./src/public/*.htm"])
      .pipe(gulp.dest("./dist/public"));
  done();
}

exports.default = gulp.series(clean, gulp.parallel(
                                        styles,
                                        transpile,
                                        views,
                                        images,
                                        others
                                      ));
