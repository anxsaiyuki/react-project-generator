const gulp = require('gulp');
const del = require('del');

gulp.task('copy', function() {
  const folders = [
    ['src/**/*.html'],
    ['src/lib/**/*'],
    ['src/**/*.png', 'src/**/*.jpg'],
  ];
  const dist = ['./dist/','./dist/lib/','./dist/']

  folders.forEach(function(folder,index) {
    folder.forEach(function(file) {
      gulp.src(file)
          .pipe(gulp.dest(dist[index]));
    })
  })
});

gulp.task('clean', function() {
  return del.sync([
    './dist/**',
  ]);
});

gulp.task('build', ['clean', 'copy']);
