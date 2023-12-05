module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-spec-reporter')
        ],
        specReporter: {
            suppressErrorSummary: false, // do not print error summary
            suppressFailed: false,       // do not print information about failed tests
            suppressPassed: false,       // do not print information about passed tests
            suppressSkipped: true,       // do not print information about skipped tests
            showSpecTiming: false,       // print the time elapsed for each spec
            failFast: false              // test would finish with error when a first fail occurs. 
        },
        client: {
            jasmine: {
                random: false
                // you can add configuration options for Jasmine here
                // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
                // for example, you can disable the random execution with `random: false`
                // or set a specific seed with `seed: 4321`
            },
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
            suppressAll: true // removes the duplicated traces
        },
        coverageReporter: {
            dir: require('path').join(__dirname, './coverage'),
            subdir: '.',
            reporters: [
                { type: 'html' },
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' }
            ],
            check: {
                global: {
                    statements: 80,
                    branches: 80,
                    functions: 80,
                    lines: 80
                }
            }
        },
        reporters: ['progress', 'kjhtml'],
        /* reporters: ['spec'], */
        /* reporters: ['progress', 'coverage'], */
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        files: [],
    });
};
