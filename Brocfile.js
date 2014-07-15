/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/ionic/release/fonts/ionicons.eot', {
  destDir: '/fonts'
});
app.import('vendor/ionic/release/fonts/ionicons.svg', {
  destDir: '/fonts'
});
app.import('vendor/ionic/release/fonts/ionicons.ttf', {
  destDir: '/fonts'
});
app.import('vendor/ionic/release/fonts/ionicons.woff', {
  destDir: '/fonts'
});

module.exports = app.toTree();
