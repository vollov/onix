const log = require('../../lib/logger.js')

exports.loggerTest = function(test){
  log.info('hi');
  log.warn({lang:'fr'}, 'au revoir');
  //test.equal(res, "abc", "message to print");
  test.done();
};
