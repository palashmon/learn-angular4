/**
 * @file Update test configuration, to be adjusted to run in CI environments
 */

/*eslint-disable */
const config = require('./protractor.conf').config;

config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--no-sandbox']
    }
};

exports.config = config;
