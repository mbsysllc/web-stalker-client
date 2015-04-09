/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/highlight/src/highlight.js');
app.import('bower_components/highlight/src/styles/github.css');

module.exports = app.toTree();