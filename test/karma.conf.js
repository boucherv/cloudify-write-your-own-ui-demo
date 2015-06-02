module.exports = function(config) {
    var configuration = {
        // base path, that will be used to resolve files and exclude
        basePath: '',

        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            '../node_modules/phantomjs-polyfill/bind-polyfill.js',
            'bind_polyfill.js',
            '../bower_components/angular/angular.js',
            '../bower_components/angular-mocks/angular-mocks.js',
            '../bower_components/angular-cookies/angular-cookies.js',
            '../bower_components/angular-route/angular-route.js',
            '../bower_components/angular-sanitize/angular-sanitize.js',
            '../bower_components/angular-resource/angular-resource.js',
            '../bower_components/angular-animate/angular-animate.js',
            '../bower_components/cloudify-js/dist/cloudify.angular.js',
            '../app/scripts/*.js',
            '../app/scripts/**/*.js',
            '../.tmp/styles/main.css',
            'spec/**/*.js'
        ],

        // list of files to exclude
        exclude: [],
        proxies: {
            '/i18n/translations_en.json' : 'http://localhost:8080/base/test/spec/mocks/mock_translations_en.json',
            '/images/' : 'http://localhost:8080/base/app/images'
        },
        preprocessors: {
        },

        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots', 'progress'
        // CLI --reporters progress
        reporters: ['spec'],

        junitReporter: {
            // will be resolved to basePath (in the same way as files/exclude patterns)
            outputFile: 'test-results.xml',
            suite: ''
        },

        // web server port
        // CLI --port 9876
        port: 8080,

        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        browsers: ['PhantomJS'],

//        customLaunchers: {
//            Chrome_travis_ci: {
//                base: 'Chrome',
//                flags: ['--no-sandbox']
//            }
//        },

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 20000,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: false,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,
        coverageReporter: {
            type : 'html',
            dir : 'coverage/',
            subdir: function(browser){
                var result = browser.toLowerCase().split(/[ /-]/)[0];
                console.log('this is browser',result);
                return result;
            }
        },

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-spec-reporter'
        ]
    };

//    if (process.env.TRAVIS) {
//        configuration.browsers = ['Chrome_travis_ci'];
//    }

    config.set(configuration);
};
