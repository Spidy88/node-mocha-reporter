exports = module.exports = NodeMochaReporter;

function NodeMochaReporter(runner) {
    var report = {
        passed: [],
        failed: [],
        skipped: []
    };

    this.done = reportResults;

    runner.on('pass', onTestComplete.bind(this, 'passed'));
    runner.on('pending', onTestComplete.bind(this, 'skipped'));
    runner.on('fail', onTestComplete.bind(this, 'failed'));

    function onTestComplete(status, test, err) {
        var cleanTest = clean(test);

        if( err ) {
            cleanTest.error = err;
        }

        report[status].push(cleanTest);
    }

    function reportResults(failures, cb) {
        cb(report);
    }

    function clean(test) {
        return {
            description: test.title,
            suite: parseSuites(test.parent),
            success: (test.state === 'passed' && !test.pending),
            skipped: test.pending,
            duration: test.duration,
            testBody: test.body
        };
    }

    function parseSuites(suite) {
        var suites = [];

        while(!suite.root) {
            suites.unshift(suite.title);
            suite = suite.parent;
        }

        return suites;
    }
}