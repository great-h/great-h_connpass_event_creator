const Browser = require('zombie');

const userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1";
const browser = new Browser();

function loginAction(user, password) {
  return () => {
    console.log(browser.window.location.toString());
    return browser.fill('username', )
    .fill('password', password)
  }
}

browser.visit('https://connpass.com/login/')
  .then(loginAction(process.env.CONNPASS_USER, process.env.CONNPASS_PASSWORD))
  .then((b) => {
    console.log(browser.window.location.toString());
    return browser
  }).catch(() => {
    console.log('hoge');
  });
