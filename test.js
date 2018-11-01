var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('https://trueautomation.io/')
    .click('.login-btn')
    .click('div.sign-up-container > a')
    .waitForVisible('*[name="email"]', 7000)
    .setValue('*[name="email"]', 'your@mail.com')
    .end()
    .catch(function(err) {
        console.log(err);
    });
