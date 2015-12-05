var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function() {
    gulp.src('file*.txt')
        .pipe(concat('result.txt'))
        .pipe(gulp.dest('./build/'));
});

var gulp = require('gulp');
gulp.task('test_task', function() {
	var i = 1;
	var j = 2;
	if (i == j){
		console.log('equals');
	}
	if (i != j){
		console.log('not equals');
	}
    
});