"use strict";

var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
var del = require("del");
var gulp = require("gulp");
var sass = require("gulp-sass");
var tsc = require("gulp-typescript");
var uglify = require("gulp-uglify-es").default;

const tsOptions = {
  module: "commonjs",
  esModuleInterop: true,
  target: "es6",
  noImplicitAny: true,
  moduleResolution: "node",
  sourceMap: false,
  outDir: "dist",
  baseUrl: ".",
  paths: {
    "*": ["node_modules/*"]
  }
};

const clean = () => del(["dist"]);

const styles = done => {
  gulp
    .src("./src/public/stylesheets/main.scss")
    .pipe(
      sass({
        outputStyle: "nested",
        precision: 10,
        includePaths: ["."],
        onError: console.error.bind(console, "Sass error:")
      })
    )
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest("./dist/public/stylesheets"));
  done();
};

const transpile = done => {
  gulp
    .src("./src/**/*.ts")
    .pipe(tsc(tsOptions))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
  done();
};

const views = done => {
  gulp.src(["./src/**/*.ejs", "./src/**/*.html"]).pipe(gulp.dest("./dist"));
  done();
};

const images = done => {
  gulp.src("./src/public/images/*").pipe(gulp.dest("./dist/public/images"));
  done();
};

const others = done => {
  gulp.src("./src/public/js/*.js").pipe(gulp.dest("./dist/public/js"));
  gulp
    .src(["./src/public/*.xml", "./src/public/*.txt", "./src/public/*.htm"])
    .pipe(gulp.dest("./dist/public"));
  done();
};

exports.default = gulp.series(
  clean,
  gulp.parallel(styles, transpile, views, images, others)
);
