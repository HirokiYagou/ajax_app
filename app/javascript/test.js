function test() {
  let qs = require('qs');

  let parseStr = qs.parse('station=tama-plaza&num=16');
  console.log(parseStr)
  console.log(sharedData)
}

document.addEventListener('DOMContentLoaded', test)