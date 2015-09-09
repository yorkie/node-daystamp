
'use strict';

function fromDate (d) {
  if (!d) d = Date.now();
  return parseInt(d/(1000*60*60*24));
}

function fromNow () {
  return fromDate();
}

exports.fromDate = fromDate;
exports.fromNow = fromNow;

