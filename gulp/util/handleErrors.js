'use strict';

var _      = require('lodash'),
    notify = require('gulp-notify');

module.exports = function (error) {

  var emitEnd = _.bind(this, this.emit, 'end');

  if (global.release) {
    releaseErrorHandler();
  } else {
    devErrorHandler();
  }

  function releaseErrorHandler() {
    // Log the error and stop the process to prevent broken code from building
    console.log(error);
    process.exit(1);
  }

  function devErrorHandler() {
    // Send error to notification center with gulp-notify
    notify.onError({
      title:   'Compile Error',
      message: '<%= error.message %>'
    })(error);

    // Keep gulp from hanging on this task
    emitEnd();
  }
};