
'use strict';

function fromDate (d) {
  return parseInt(d/(1000*60*60*24));
}

exports.fromDate = fromDate;

