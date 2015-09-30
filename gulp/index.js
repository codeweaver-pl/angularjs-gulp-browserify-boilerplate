'use strict';

var path = require('path'),
    fs   = require('fs');

fs.readdirSync('./gulp/tasks/')
  .filter(scriptsOnly)
  .forEach(requireTask);

function scriptsOnly(fileName) {
  return /(\.(js)$)/i.test(path.extname(fileName));
}

function requireTask(taskName) {
  require('./tasks/' + taskName);
}