const models = require('../../models');
const log = require('../../lib/logger.js')

exports.createTableTest = function(test){
  models.sequelize
  .sync({ force: true })
  .then(function(err) {
    log.info('It worked!');
  }, function (err) {
    log.error('An error occurred while creating the table:', err);
  });
  test.done();
};
