// Utilities
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var fs = require("fs");

// Gulp
var gulp = require("gulp");

// Gulp plugins
var concat = require("gulp-concat");
var gutil = require("gulp-util");
var header = require("gulp-header");
var postcss = require("gulp-postcss");
var rename = require("gulp-rename");
var runSequence = require("run-sequence");

// Misc/global vars
var pkg = JSON.parse(fs.readFileSync("package.json"));
var activatedAnimations = activateAnimations();

// Task options
var opts = {
  destPath: "./dist/",
  destPathWebkit:"./dist-webkit/",
  demoPath:"./docs/demo/modules/effects.css/dist",
  concatName: "effects.css",
  minRename: {
    suffix: ".min"
  },

  banner: ""
};

// ----------------------------
// Gulp task definitions
// ----------------------------

gulp.task("createCSS", function() {
  return gulp
    .src(activatedAnimations)
    .pipe(concat(opts.concatName))
    .pipe(postcss([]))
    //.pipe(gulp.dest(opts.destPath))
    .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
    .pipe(rename(opts.minRename))
    .pipe(gulp.dest(opts.destPath));
});

gulp.task("createPartCSS", function() {
  return gulp
    .src(activatedAnimations)
    .pipe(postcss([]))
    //.pipe(gulp.dest(opts.destPath))
    .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
    .pipe(rename(opts.minRename))
    .pipe(gulp.dest(opts.destPath));
});

gulp.task("createCSS-webkit", function() {
  return gulp
    .src(activatedAnimations)
    .pipe(concat(opts.concatName))
    .pipe(postcss([autoprefixer()]))
    //.pipe(gulp.dest(opts.destPathWebkit))
    .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
    .pipe(rename(opts.minRename))
    .pipe(gulp.dest(opts.destPathWebkit));
});

gulp.task("createPartCSS-webkit", function() {
  return gulp
    .src(activatedAnimations)
    .pipe(postcss([autoprefixer()]))
    //.pipe(gulp.dest(opts.destPathWebkit))
    .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
    .pipe(rename(opts.minRename))
    .pipe(gulp.dest(opts.destPathWebkit));
});


gulp.task("addHeader", function() {
  return gulp
    .src("*.css")
    .pipe(header(opts.banner, pkg))
    .pipe(gulp.dest(opts.destPath));
});

gulp.task("default", gulp.series("createCSS", "createPartCSS"));
gulp.task("webkit", gulp.series("createCSS-webkit", "createPartCSS-webkit"));


gulp.task("demo",function(){
  return gulp.src(opts.destPath+"/*.min.css")
  .pipe(gulp.dest(opts.demoPath));
});

// ----------------------------
// Helpers/functions
// ----------------------------

// Read the config file and return an array of the animations to be activated
function activateAnimations() {
  var categories = JSON.parse(fs.readFileSync("effects-config.json")),
    category,
    files,
    file,
    target = [],
    count = 0;

  for (category in categories) {
    if (categories.hasOwnProperty(category)) {
      files = categories[category];

      for (file in files) {
        if (files[file]) {
          // marked as true
          target.push("sources/" + category + "/" + file + ".css");
          count += 1;
        }
      }
    }
  }
  // prepend base CSS
  target.push("sources/effects-core.css");

  if (!count) {
    gutil.log("No animations activated.");
  } else {
    gutil.log(count + (count > 1 ? " animations" : " animation") + " activated.");
  }

  return target;
}