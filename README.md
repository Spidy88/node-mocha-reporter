Node Mocha Reporter
===================
A mocha reporter not tied to STDOUT that provides tests results in a 
json object. 

#### Usage
```javascript
var Mocha = require('mocha');
var NodeMochaReporter = require('node-mocha-reporter');
var mocha = new Mocha({ reporter: NodeMochaReporter });

// Any additional setup for this mocha run instance, like adding tests
mocha.addFile('path/to/my/test.js');

// Run mocha
mocha.run(function(report) {
    // Use report as needed
});
```

#### Report format
```javascript
{
    passed: [{
        description: String,
        suite: [String],
        success: Boolean,
        skipped: Boolean,
        duration: Number,
        testBody: String,
        error: String
    }],
    failed: [{
        description: String,
        suite: [String],
        success: Boolean,
        skipped: Boolean,
        duration: Number,
        testBody: String,
        error: String
    }],
    skipped: [{
        description: String,
        suite: [String],
        success: Boolean,
        skipped: Boolean,
        duration: Number,
        testBody: String,
        error: String
    }]
}
```