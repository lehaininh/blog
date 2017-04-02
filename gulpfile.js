let gulp = require('gulp');
let nodemon = require('gulp-nodemon');
let webpack = require('webpack');
let webpack_config = require('./webpack.config.js');

gulp.task('jsx:watch', (done) => {
    let firedDone = false;
    webpack(webpack_config).watch({
        aggregateTimeout: 1000,
        poll: 1000
    }, (err, res) => { //webpack waits for 1000ms before re-build
        if (err) {
            console.error('ERROR: ', err, {file: __filename});
        } else {
            console.info('DONE: [webpack hash]', res.hash, ' TIME (ms): ',
                new Date(res.endTime - res.startTime).getTime(), {file: __filename}
            );
        }
        console.info('Webpack\'s done the magic');
        if (!firedDone) {
            firedDone = true;
            done();
        }
    });
});

gulp.task('default', ['jsx:watch'], () => {
    nodemon({
        script: 'app.js',
        ignore: 'public/*'
    });
});
