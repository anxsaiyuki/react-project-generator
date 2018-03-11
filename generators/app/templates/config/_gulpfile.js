const gulp = require('gulp');
const del = require('del');

gulp.task('copy', function() {
  const folders = [
    ['src/**/*.html'],
    ['src/**/*.png', 'src/**/*.jpg'],
  ];
  const dist = './dist/'

  folders.forEach(function(folder) {
    folder.forEach(function(file) {
      gulp.src(file)
          .pipe(gulp.dest(dist));
    })
  })
});

gulp.task('clean', function() {
  return del.sync([
    './dist/**',
  ]);
});

gulp.task('build', ['clean', 'copy']);
