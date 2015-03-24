// Karma configuration
// Generated on Wed Mar 04 2015 16:32:06 GMT+0100 (CET)

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'sinon'],
        files: [
            './array.onempty.js',
            'test/*.test.js',
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        plugins: ['karma-*'],
        singleRun: true
    });
};
