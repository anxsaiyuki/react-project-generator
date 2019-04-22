const gulp = require('gulp');
const del = require('del');

gulp.task('copy', function(done) {
  const folders = [
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
  done();
});

gulp.task('clean', function(done) {
  del.sync([
    './dist/**',
  ]);
  done();
});

gulp.task('build', gulp.series('clean', 'copy'));
