var allure = require('allure-commandline');

var generation = allure([
 'generate',
 'allure-results',
 '-o',
 'allure-report',
 '--clean'
]);

generation.on('exit', function (exitCode) {
 allure(['open', './allure-report']);
});
